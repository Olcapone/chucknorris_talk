import React, { useEffect } from "react";

import UserSearch from "../UserSearch/UserSearch";
import Title from "../Title/Title";
import ChatList from "../СhatList/ChatList";
import useLocalStorage from "../../Hooks/UseLocalStorage";
import s from "./Sidebar.module.css";

export default function Sidebar({ saveID }) {
  const [currentId, setId] = useLocalStorage("currentId", "");
  const [filter, setFilter] = useLocalStorage("filter", "");

  useEffect(() => {
    saveID(currentId);
  }, [currentId, saveID]);

  const handleClick = (userId) => setId(userId);

  const changeFilter = (e) => {
    const { value } = e.currentTarget;
    setFilter(value);
  };

  return (
    <aside className={s.aside}>
      <UserSearch value={filter} onChange={changeFilter} />
      <Title />
      <ChatList onSubmit={handleClick} searchUser={filter} />
    </aside>
  );
}
