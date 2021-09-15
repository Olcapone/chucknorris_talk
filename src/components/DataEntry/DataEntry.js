import React from "react";
import { IoMdSend } from "react-icons/io";
import s from "./DataEntry.module.css";

export default function DataEntry() {
  return (
    <form className={s.formMessage}>
      <input
        className={s.dataEntry}
        type="text"
        placeholder="Type your message"
      />
      <IoMdSend />
    </form>
  );
}
