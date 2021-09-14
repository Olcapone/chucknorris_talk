import React from "react";

import s from "./ChatUser.module.css";
import useLocalStorage from "../../Hooks/UseLocalStorage";

export default function ChatUser({ config }) {
  const { id, avatar, name } = config;
  const [currentId, setId] = useLocalStorage("currentId", "");

  return (
    <li className={s.item} id={id} onClick={(e) => setId(e.currentTarget.id)}>
      <img className={s.icon} src={avatar} alt="avatar" />
      <p>{name}</p>
    </li>
  );
}
