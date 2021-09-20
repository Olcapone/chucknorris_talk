//------base
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
//------components
import ChatBoard from "../ChatBoard/ChatBoard";
import ChatItem from "../ChatItem/ChatItem";
import DataEntry from "../DataEntry/DataEntry";
import localApi from "../../Api/localApi";
import normalizeData from "../../utils/normalizeData";
//------styles

import s from "./TextField.module.css";

export default function TextField({ tranferID }) {
  const [TextFieldMessage, saveMessage] = useState("");
  const [user, setUser] = useState({});
  const { senderName, avatar } = user;

  useEffect(() => {
    localApi(tranferID).then((response) => {
      console.log("im changed textfield");
      setUser(response.data[0]);
    });
  }, [tranferID]);

  const sendMessage = (value) => {
    saveMessage({ answerText: value, createdAt: normalizeData() });
  };

  return (
    <section className={s.section}>
      <ChatBoard avatar={avatar} name={senderName} />
      <ChatItem user={user} newMessage={TextFieldMessage} />
      <DataEntry onChange={sendMessage} />
    </section>
  );
}

TextField.propTypes = {
  tranferID: PropTypes.string,
};
