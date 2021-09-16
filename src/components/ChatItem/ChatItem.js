import React, { useEffect, useRef } from "react";
import shortid from "shortid";
import moment from "moment";
import s from "./ChatItem.module.css";
import data from "../../utils/message.json";
import Api from "../../Api/Api";
import useLocalStorage from "../../Hooks/UseLocalStorage";
import ChatMessage from "../ChatMessage/ChatMessage";
import ChatAnswer from "../ChatAnswer/ChatAnswer";

export default function ChatItem({ idChat, avatar, newMessage }) {
  const [messageText, setMessage] = useLocalStorage("messageText", []);
  let findChat = data.messages.find((some) => some.messageId === idChat);
  let defaultPage = findChat.dialogue;
  // JSON.parse(window.localStorage.getItem("messageText")) || пока нет потому что не меняються чаты
  const chucknorrisTalk = useRef();

  useEffect(() => {
    setMessage(defaultPage);
  }, [findChat]);

  useEffect(() => {
    console.log("im change");
    // let timerId;

    if (newMessage !== "" && newMessage.answerText !== "") {
      console.log(newMessage.answerText);
      setMessage((messageText) => [...messageText, newMessage]);

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
