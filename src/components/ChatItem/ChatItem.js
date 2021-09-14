import React from "react";
// import React, { Fragment, useEffect, useState } from "react";
import shortid from "shortid";
import s from "./ChatItem.module.css";
import data from "../../utils/message.json";

import ChatMessage from "../ChatMessage/ChatMessage";
import ChatAnswer from "../ChatAnswer/ChatAnswer";

//import useLocalStorage from '../../Hooks/UseLocalStorage';

export default function ChatItem({ idChat, avatar }) {
  // const [messageText, setMessage] = useLocalStorage('messageText', '');
  // const [answerText, setAnswer] = useLocalStorage('answerText', '');
  // const [id, setId] = useState(1);

  const findChat = data.messages.find((some) => some.messageId === idChat);

  return (
    <ul className={s.list}>
      {findChat.dialogue.map((item) => {
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
