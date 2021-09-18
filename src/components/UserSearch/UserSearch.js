import React from "react";
import PropTypes from "prop-types";
import { FaUserAlt, FaSearch } from "react-icons/fa";
import s from "./UserSearch.module.css";

export default function UserSearch({ value, onChange }) {
  return (
    <section className={s.section}>
      <div className={s.thumb}>
        <FaUserAlt />
      </div>
      <label className={s.search}>
        <FaSearch />
        <input
          className={s.searchEntry}
          type="text"
          name="filter"
          value={value}
          onChange={onChange}
          placeholder="Search or start new chat"
        />
      </label>
    </section>
  );
}

UserSearch.propTypes = {
  value: PropTypes.string,
};
