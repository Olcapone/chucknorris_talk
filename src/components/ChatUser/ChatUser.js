import React, { Fragment } from "react";
import s from "./ChatUser.module.css";

export default function ChatUser({ config }) {
  const { avatar, name } = config;

  return (
    <>
      <img className={s.icon} src={avatar} alt="avatar" />
      <p>{name}</p>
    </>
  );
}
