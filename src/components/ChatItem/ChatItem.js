//------base
import React, { Fragment, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import shortid from "shortid";
//------styles
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import s from "./ChatItem.module.css";
import normalizeData from "../../utils/normalizeData";
//------api
import Api from "../../Api/Api";
import localApi from "../../Api/localApi";
import localApiPut from "../../Api/localApiPut";
//------components
import ChatMessage from "../ChatMessage/ChatMessage";
import ChatAnswer from "../ChatAnswer/ChatAnswer";

export default function ChatItem({ newMessage, user }) {
  const chucknorrisTalk = useRef();
  const { id, senderName, avatar, ...props } = user;
  const [dialogues, setDialogues] = useState([]);

  useEffect(() => {
    //---render user
    localApi(id).then((response) => {
      console.log("im changed chatItem");
      setDialogues(response.data[0].dialogue);
    });
  }, [user]);

  useEffect(() => {
    //--- save my message in bd and state
    if (newMessage !== "" && newMessage.answerText !== "") {
      console.log(dialogues);
      localApiPut(user, newMessage).then((response) => {
        if (response.status === 200) {
          setDialogues((dialogues) => [...dialogues, newMessage]);
        }
      });

      //-- wait answer Chack Norris
      setTimeout(() => {
        Api().then((res) => {
          chucknorrisTalk.current = res;
          const { value } = chucknorrisTalk.current;
          const normalizeText = {
            messageText: value,
            createdAt: normalizeData(),
          };

          //--save answer  Chack Norris
          localApiPut(user, normalizeText).then((response) => {
            if (response.status === 200) {
              toast.success(" Chuck Norris talk ...");
              setDialogues((dialogues) => [...dialogues, normalizeText]);
            }
          });
        });
      }, 15000);
    }
  }, [newMessage]);

  return (
    <>
      <ul className={s.list}>
        {dialogues &&
          dialogues.map((item) => {
            let { messageText, answerText, createdAt } = item;

            return (
              <li
                className={`${s.item} ${answerText && s.dispatchedMessage}`}
                key={shortid.generate()}
              >
                {messageText ? (
                  <ChatMessage
                    avatar={avatar}
                    message={messageText}
                    date={createdAt}
                  />
                ) : (
                  <ChatAnswer answer={answerText} date={createdAt} />
                )}
              </li>
            );
          })}
      </ul>
    </>
  );
}

ChatItem.propTypes = {
  idChat: PropTypes.string,
};
