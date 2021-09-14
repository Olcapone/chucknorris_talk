import React from "react";
import ChatItem from "../ChatItem/ChatItem";
import s from "./TextField.module.css";

export default function TextField() {
  return (
    <div className={s.main}>
      <ChatItem idChat={"5"} />
    </div>
  );
}
