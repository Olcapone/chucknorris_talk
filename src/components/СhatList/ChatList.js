import React from "react";
import shortid from "shortid";
import s from "./ChatList.module.css";
import { menuConfig } from "../../utils/dataChat";
import ChatUser from "../ChatUser/ChatUser";

export default function ChatList({ onSubmit }) {
  const handID = (e) => {
    onSubmit(e.currentTarget.id);
  };

  return (
    <ul className={s.list}>
      {menuConfig.map((config) => (
        <li
          className={s.item}
          key={shortid.generate()}
          id={config.id}
          onClick={handID}
        >
          <ChatUser config={config} />
        </li>
      ))}
    </ul>
  );
}
