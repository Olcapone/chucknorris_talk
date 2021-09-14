import React, { Fragment } from "react";
import s from "./ChatAnswer.module.css";

export default function ChatAnswer({ answer, date }) {
  return (
    <>
      <p className={s.answer}>{answer}</p>
      <span className={s.answerDate}>{date}</span>
    </>
  );
}
