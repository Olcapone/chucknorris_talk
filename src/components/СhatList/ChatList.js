import React from "react";
import shortid from "shortid";
import s from "./ChatList.module.css";
import { menuConfig } from "../../utils/dataChat";
import ChatUser from "../ChatUser/ChatUser";

export default function ChatList({ searchUser, onSubmit }) {
  const handID = (e) => {
    onSubmit(e.currentTarget.id);
  };

  const findContact = () => {
    const normalizetext = searchUser.toLowerCase();
    return menuConfig.filter((contact) =>
      contact.name.toLowerCase().includes(normalizetext)
    );
  };

  let visibleContact = searchUser.length === 0 ? menuConfig : findContact();

  return (
    <ul className={s.list}>
      {visibleContact.map((config) => (
        <li
          className={s.item}
          key={shortid.generate()}
          id={config.id}
          onClick={handID}
        >
          <ChatUser config={config} />
        </li>
      ))}
    </ul>
  );
}
