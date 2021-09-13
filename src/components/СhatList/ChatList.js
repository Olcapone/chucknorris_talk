import React from "react";
import s from "./ChatList.module.css";

export default function ChatList(configs) {
  return (
    <ul className={s.list}>
      {configs.props.map((config) => (
        <li className={s.item} key={config.id}>
          <img className={s.icon} src={config.avatar} alt="avatar" />
          <p>{config.name}</p>
        </li>
      ))}
    </ul>
  );
}
