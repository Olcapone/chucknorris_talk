import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import s from "./LastMessage.module.css";

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

LastMessage.propTypes = {
  last: PropTypes.shape({}),
};
