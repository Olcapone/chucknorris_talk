import React from "react";
import s from "./ChatBoard.module.css";

export default function ChatBoard({ avatar, name }) {
  return (
    <div className={s.infoBord}>
      <img className={s.avatar} src={avatar} alt="avatar" />
      <p>{name}</p>
    </div>
  );
}
