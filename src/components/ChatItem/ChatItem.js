import React, { Fragment } from "react";
// import React, { Fragment, useEffect, useState } from "react";
import shortid from "shortid";
import s from "./ChatItem.module.css";
import data from "../../utils/message.json";
import { menuConfig } from "../../utils/dataChat";
//import useLocalStorage from '../../Hooks/UseLocalStorage';

export default function ChatItem({ idChat }) {
  // const [messageText, setMessage] = useLocalStorage('messageText', '');
  // const [answerText, setAnswer] = useLocalStorage('answerText', '');
  // const [id, setId] = useState(1);

  const findChat = data.messages.find((some) => some.messageId === idChat);
  //    if (some.messageId === idChat) {
  //  return {senderName: some.senderName, dialog: some.dialogue};
  //   }

  const findUser = menuConfig.find(
    (config) => config.name === findChat.senderName
  );
  //       console.log( config.name);

  //       if (config.name === findChat.senderName) {

  //           return  config.avatar
  //      }
  //   });
  const { avatar, name } = findUser;

  console.log(findChat.senderName);

  console.log(findUser.avatar);

  return (
    <section className={s.section}>
      <div className={s.infoBord}>
        <img className={s.avatar} src={avatar} alt="avatar" />
        <p>{name}</p>
      </div>
      <ul className={s.list}>
        {findChat.dialogue.map((item) => {
          let { messageText, answerText, createdAt } = item;

          return (
            <li className={s.item} key={shortid.generate()}>
              {messageText ? (
                <>
                  <div className={s.thumb}>
                    {" "}
                    <img className={s.avatar} src={avatar} alt="avatar" />
                    <p className={s.message}>{messageText}</p>
                  </div>
                  <span className={s.date}>{createdAt}</span>
                </>
              ) : (
                <>
                  <p className={s.answer}>{answerText}</p>
                  <span className={s.answerDate}>{createdAt}</span>
                </>
              )}
            </li>
          );
        })}
      </ul>
      <form className={s.formMessage}>
        <input
          className={s.dataEntry}
          type="text"
          placeholder="Type your message"
        />
        <button type="submit">submit</button>
      </form>
    </section>
  );
}
