import React, { useState } from "react";
import { IoMdSend } from "react-icons/io";
import s from "./DataEntry.module.css";

export default function DataEntry({ onChange }) {
  const [message, setValue] = useState("");

  const reset = () => {
    setValue("");
  };

  const handleChange = (e) => {
    const { value } = e.target;

    setValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onChange(message);
    reset();
  };

  return (
    <form className={s.formMessage} onSubmit={handleSubmit}>
      <input
        className={s.dataEntry}
        type="text"
        name="filter"
        value={message}
        onChange={handleChange}
        placeholder="Type your message"
      />
      <button className={s.button} type="submit">
        <IoMdSend />
      </button>
    </form>
  );
}
