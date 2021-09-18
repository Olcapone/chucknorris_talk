import React, { Fragment } from "react";
import PropTypes from "prop-types";
import s from "./ChatAnswer.module.css";

export default function ChatAnswer({ answer, date }) {
  return (
    <>
      <p className={s.answer}>{answer}</p>
      <span className={s.answerDate}>{date}</span>
    </>
  );
}

ChatAnswer.propTypes = {
  answer: PropTypes.string,
  date: PropTypes.string,
};
