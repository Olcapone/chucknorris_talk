import React, { useState } from "react";
import PropTypes from "prop-types";
import ChatBoard from "../ChatBoard/ChatBoard";
import ChatItem from "../ChatItem/ChatItem";
import DataEntry from "../DataEntry/DataEntry";
import moment from "moment";

import { findUser, defaultUserId } from "../../utils/dataChat";
import s from "./TextField.module.css";

export default function TextField({ tranferID }) {
  const [TextFieldMessage, saveMessage] = useState("");
  let data = tranferID || defaultUserId;
  let user = findUser(data);
  const { avatar, name } = user;

  const sendMessage = (value) => {
    const data = new Date();
    const normaliseDate = `${moment(data).format("l")} ${moment(data).format(
      "LT"
    )}`;

    saveMessage({ answerText: value, createdAt: normaliseDate });
  };

  return (
    <section className={s.section}>
      <ChatBoard avatar={avatar} name={name} />
      <ChatItem idChat={data} avatar={avatar} newMessage={TextFieldMessage} />
      <DataEntry onChange={sendMessage} />
    </section>
  );
}

TextField.propTypes = {
  tranferID: PropTypes.string,
};
