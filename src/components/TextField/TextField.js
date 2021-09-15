import React from "react";
import ChatBoard from "../ChatBoard/ChatBoard";
import ChatItem from "../ChatItem/ChatItem";
import DataEntry from "../DataEntry/DataEntry";

import { findUser, defaultUserId } from "../../utils/dataChat";
import s from "./TextField.module.css";

export default function TextField({ tranferID }) {
  let data = tranferID || defaultUserId;
  let user = findUser(data);

  const { avatar, name } = user;

  return (
    <section className={s.section}>
      <ChatBoard avatar={avatar} name={name} />
      <ChatItem idChat={data} avatar={avatar} />
      <DataEntry />
    </section>
  );
}
