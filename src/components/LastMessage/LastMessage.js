import React, { useEffect, useState } from "react";
import s from "./LastMessage.module.css";

export default function LastMessage({ last }) {
  const { messageText, answerText, createdAt } = last;

  const normaliseMessage = (message) => {
    if (String(message).length > 40) {
      return ` ${String(message).slice(0, 50)}... `;
    } else return message;
  };

  return (
    <p className={s.message}>
      {normaliseMessage(messageText || answerText)}
      <span className={s.date}>{createdAt}</span>
    </p>
  );
}
