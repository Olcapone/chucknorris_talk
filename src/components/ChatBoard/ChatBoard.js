import React from "react";
import PropTypes from "prop-types";
import s from "./ChatBoard.module.css";

export default function ChatBoard({ avatar, name }) {
  return (
    <div className={s.infoBord}>
      <img
        className={s.avatar}
        src={process.env.PUBLIC_URL + avatar}
        alt="avatar"
      />
      <p>{name}</p>
    </div>
  );
}

ChatBoard.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
};
