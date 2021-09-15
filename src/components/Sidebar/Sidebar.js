import React, { useEffect } from "react";
import UserSearch from "../UserSearch/UserSearch";
import Title from "../Title/Title";
import ChatList from "../СhatList/ChatList";
import useLocalStorage from "../../Hooks/UseLocalStorage";
import s from "./Sidebar.module.css";

export default function Sidebar({ saveID }) {
  const [currentId, setId] = useLocalStorage("currentId", "");

  useEffect(() => {
    saveID(currentId);
  }, [currentId, saveID]);

  const handleClick = (userId) => setId(userId);

  return (
    <aside className={s.aside}>
      <UserSearch />
      <Title />
      <ChatList onSubmit={handleClick} />
    </aside>
  );
}
