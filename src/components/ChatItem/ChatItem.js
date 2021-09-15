import React, { useEffect, useRef } from "react";
import shortid from "shortid";
import s from "./ChatItem.module.css";
import data from "../../utils/message.json";
import Api from "../../Api/Api";
import useLocalStorage from "../../Hooks/UseLocalStorage";
import ChatMessage from "../ChatMessage/ChatMessage";
import ChatAnswer from "../ChatAnswer/ChatAnswer";

export default function ChatItem({ idChat, avatar, newMessage }) {
  const [messageText, setMessage] = useLocalStorage("messageText", []);
  let findChat = data.messages.find((some) => some.messageId === idChat);
  const chucknorrisTalk = useRef();

  useEffect(() => {
    console.log("im run!");
    setMessage(findChat.dialogue);
  }, [findChat]);

  useEffect(() => {
    console.log("im change");
    // let timerId;

    if (newMessage !== "") {
      setMessage((messageText) => [...messageText, newMessage]);

      setTimeout(() => {
        Api()
          .then((res) => {
            console.log("Api run!");

            chucknorrisTalk.current = res;
            const { created_at, value } = chucknorrisTalk.current;
            const normaliseDate = created_at.slice(0, 19);
            const message = { messageText: value, createdAt: normaliseDate };

            setMessage((messageText) => [...messageText, message]);
          })
          .catch((error) => error);
      }, 15000);
    }
  }, [newMessage]);

  return (
    <ul className={s.list}>
      {messageText.map((item) => {
        let { messageText, answerText, createdAt } = item;

        return (
          <li className={s.item} key={shortid.generate()}>
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
