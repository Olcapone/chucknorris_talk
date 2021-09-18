import React, { useEffect, useState } from "react";
import s from "./LastMessage.module.css";
import { func } from "prop-types";

export default function LastMessage({ last }) {
  const [message, changeMes] = useState("");

  useEffect(() => {
    changeMes(last);
  }, []);

  const normaliseMessage = (message) => {
    if (String(message).length > 40) {
      return ` ${String(message).slice(0, 50)}... `;
    } else return message;
  };

  const { messageText, answerText, createdAt } = message;

  return (
    <p className={s.message}>
      {normaliseMessage(messageText || answerText)}
      <span className={s.date}>{createdAt}</span>
    </p>
  );
}
