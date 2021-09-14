import React from "react";
import s from "./ChatList.module.css";
import ChatUser from "../ChatUser/ChatUser";

export default function ChatList(configs) {
  return (
    <ul className={s.list}>
      {" "}
      Chats
      {configs.props.map((config) => (
        <ChatUser config={config} />
      ))}
    </ul>
  );
}
