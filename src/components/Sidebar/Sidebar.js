import React from "react";
import { menuConfig } from "../../utils/dataChat";
import ChatList from "../СhatList/ChatList";
import s from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <aside className={s.aside}>
      <ChatList props={menuConfig} />
    </aside>
  );
}
