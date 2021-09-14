import React, { Fragment } from "react";
import s from "./ChatMessage.module.css";

export default function ChatMessage({ avatar, message, date }) {
  return (
    <>
      <div className={s.thumb}>
        {" "}
        <img className={s.avatar} src={avatar} alt="avatar" />
        <p className={s.message}>{message}</p>
      </div>
      <span className={s.date}>{date}</span>
    </>
  );
}
