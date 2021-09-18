import React, { Fragment } from "react";
import s from "./ChatUser.module.css";
import LastMessage from "../LastMessage/LastMessage";

export default function ChatUser({ config }) {
  const { avatar, senderName, dialogue } = config;

  return (
    <>
      <img
        className={s.icon}
        src={process.env.PUBLIC_URL + avatar}
        alt="avatar"
      />

      <div className={s.info}>
        <p>{senderName}</p>

        {senderName && <LastMessage last={dialogue[dialogue.length - 1]} />}
      </div>
    </>
  );
}
