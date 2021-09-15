import React, { useState } from "react";
import ChatBoard from "../ChatBoard/ChatBoard";
import ChatItem from "../ChatItem/ChatItem";
import DataEntry from "../DataEntry/DataEntry";

import { findUser, defaultUserId } from "../../utils/dataChat";
import s from "./TextField.module.css";

export default function TextField({ tranferID }) {
  const [TextFieldMessage, saveMessage] = useState("");
  let data = tranferID || defaultUserId;
  let user = findUser(data);
  const { avatar, name } = user;

  const sendMessage = (value) => {
    const normaliseDate = String(new Date()).slice(0, 24);
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
