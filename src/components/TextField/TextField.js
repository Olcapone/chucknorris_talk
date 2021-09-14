import React from "react";
import ChatBoard from "../ChatBoard/ChatBoard";
import ChatItem from "../ChatItem/ChatItem";
import DataEntry from "../DataEntry/DataEntry";

import { findUser } from "../../utils/dataChat";
import s from "./TextField.module.css";

export default function TextField() {
  let data = JSON.parse(window.localStorage.getItem("currentId"));

  console.log(data);

  let user = findUser(data);

  console.log(user);

  const { avatar, name } = user;

  return (
    <section className={s.section}>
      <ChatBoard avatar={avatar} name={name} />
      <ChatItem idChat={data} avatar={avatar} />
      <DataEntry />
    </section>
  );
}
