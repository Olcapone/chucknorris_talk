import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import TextField from "../TextField/TextField";
import s from "./Wrapper.module.css";

export default function Wrapper() {
  return (
    <section className={s.container}>
      <Sidebar />
      <TextField />
    </section>
  );
}
