import React, { Fragment } from "react";
// import React, { Fragment, useEffect, useState } from "react";
import shortid from "shortid";
import s from "./ChatItem.module.css";
import data from "../../utils/message.json";
import { menuConfig } from "../../utils/dataChat";

import ChatBoard from "../ChatBoard/ChatBoard";
import ChatMessage from "../ChatMessage/ChatMessage";
import ChatAnswer from "../ChatAnswer/ChatAnswer";
import DataEntry from "../DataEntry/DataEntry";
//import useLocalStorage from '../../Hooks/UseLocalStorage';

export default function ChatItem({ idChat }) {
  // const [messageText, setMessage] = useLocalStorage('messageText', '');
  // const [answerText, setAnswer] = useLocalStorage('answerText', '');
  // const [id, setId] = useState(1);

  const findChat = data.messages.find((some) => some.messageId === idChat);
  const findUser = menuConfig.find(
    (config) => config.name === findChat.senderName
  );

  const { avatar, name } = findUser;

  return (
    <section className={s.section}>
      <ChatBoard avatar={avatar} name={name} />
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
      <DataEntry />
    </section>
  );
}
