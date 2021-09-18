import React, { useEffect, useRef, useState } from "react";

import shortid from "shortid";
import axios from "axios";
import moment from "moment";
import s from "./ChatItem.module.css";

import Api from "../../Api/Api";
import ChatMessage from "../ChatMessage/ChatMessage";
import ChatAnswer from "../ChatAnswer/ChatAnswer";

export default function ChatItem({
  idChat = "WYZpppK7Js",
  avatar,
  newMessage,
}) {
  const [dialogues, setDialogues] = useState([]);
  const [name, setName] = useState("");
  const chucknorrisTalk = useRef();
  const BASE_URL = "http://localhost:3000/messages";

  useEffect(() => {
    console.log(dialogues);

    axios
      .get(`${BASE_URL}?id=${idChat}`)
      .then(function (response) {
        // handle success
        setDialogues(response.data[0].dialogue);
        setName(response.data[0].senderName);
      })
      .catch(function (error) {
        // handle error
        console.log("error from json server", error);
      });
  }, [idChat]);

  useEffect(() => {
    console.log("im change");
    console.log(newMessage);

    if (newMessage !== "" && newMessage.answerText !== "") {
      axios
        .put(`${BASE_URL}/${idChat}/`, {
          id: idChat,
          senderName: name,
          dialogue: [...dialogues, newMessage],
        })
        .then((response) => {
          if (response.status === 200) {
            setDialogues((dialogues) => [...dialogues, newMessage]);
          }
        });

      setTimeout(() => {
        Api()
          .then((res) => {
            console.log("Api run!");

            chucknorrisTalk.current = res;
            const { value } = chucknorrisTalk.current;
            const data = new Date();
            const normaliseDate = `${moment(data).format("l")} ${moment(
              data
            ).format("LT")}`;

            axios
              .put(`${BASE_URL}/${idChat}/`, {
                id: idChat,
                senderName: name,
                dialogue: [...dialogues, newMessage],
              })
              .then((response) => {
                if (response.status === 200) {
                  setDialogues((dialogues) => [
                    ...dialogues,
                    { messageText: value, createdAt: normaliseDate },
                  ]);
                }
              });
          })
          .catch((error) => error)
          .finally(console.log(dialogues));
      }, 15000);
    }
  }, [newMessage]);

  return (
    <ul className={s.list}>
      {dialogues.map((item) => {
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
  );
}
