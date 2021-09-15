import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import TextField from "../TextField/TextField";
import useLocalStorage from "../../Hooks/UseLocalStorage";
import s from "./Wrapper.module.css";

export default function Wrapper() {
  const [currentId, setId] = useLocalStorage("currentId", "");

  const handleSubmit = (userId) => setId(userId);

  return (
    <section className={s.container}>
      <Sidebar saveID={handleSubmit} />
      <TextField tranferID={currentId} />
    </section>
  );
}
