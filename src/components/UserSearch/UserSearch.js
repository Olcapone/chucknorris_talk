import React from "react";
import { FaUserAlt, FaSearch } from "react-icons/fa";
import s from "./UserSearch.module.css";

export default function UserSearch() {
  return (
    <section className={s.section}>
      <div className={s.thumb}>
        <FaUserAlt />
      </div>
      <label className={s.search}>
        <FaSearch />
        <input className={s.searchEntry} type="text" />
      </label>
    </section>
  );
}
