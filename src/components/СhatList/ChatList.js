import React from "react";
import shortid from "shortid";
import s from "./ChatList.module.css";
import { menuConfig } from "../../utils/dataChat";
import ChatUser from "../ChatUser/ChatUser";

export default function ChatList() {
  return (
    <ul className={s.list}>
      {menuConfig.map((config) => (
        <ChatUser config={config} key={shortid.generate()} />
      ))}
    </ul>
  );
}
