import React from "react";
import UserSearch from "../UserSearch/UserSearch";
import Title from "../Title/Title";
import ChatList from "../СhatList/ChatList";
import s from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <aside className={s.aside}>
      <UserSearch />
      <Title />
      <ChatList />
    </aside>
  );
}
