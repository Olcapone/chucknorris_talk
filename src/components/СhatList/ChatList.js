import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import shortid from "shortid";
import axios from "axios";
import s from "./ChatList.module.css";
import findContact from "../../utils/findContact";
import ChatUser from "../ChatUser/ChatUser";

const BASE_URL = "http://localhost:3000/messages";

export default function ChatList({ searchUser, onSubmit }) {
  const [user, setUser] = useState("");

  useEffect(() => {
    axios
      .get(`${BASE_URL}`)
      .then(function (response) {
        response.data.forEach((res) => {
          setUser((user) => [...user, res]);
        });
      })
      .catch(function (error) {
        // handle error
        console.log("error from json server", error);
      });
  }, []);

  const handID = (e) => {
    onSubmit(e.currentTarget.id);
  };

  let visibleContact =
    searchUser.length === 0 ? user : findContact(searchUser, user);

  return (
    <ul className={s.list}>
      {user &&
        visibleContact.map((config) => {
          return (
            <li
              className={s.item}
              key={shortid.generate()}
              id={config.id}
              onClick={handID}
            >
              <ChatUser config={config} />
            </li>
          );
        })}
    </ul>
  );
}

ChatList.propTypes = {
  searchUser: PropTypes.string,
};
