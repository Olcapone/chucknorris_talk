import React from "react";
import s from "./ChatUser.module.css";

export default function ChatUser({ config }) {
  const { id, avatar, name } = config;

  return (
    <li className={s.item} key={id}>
      <img className={s.icon} src={avatar} alt="avatar" />
      <p>{name}</p>
    </li>
  );
}
