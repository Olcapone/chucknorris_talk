import React, { useEffect, useState } from "react";
import shortid from "shortid";
import axios from "axios";
import s from "./ChatList.module.css";
import { menuConfig } from "../../utils/dataChat";
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

  const findContact = () => {
    const normalizetext = searchUser.toLowerCase();

    if (user) {
      return user.filter((contact) =>
        contact.senderName.toLowerCase().includes(normalizetext)
      );
    }
  };

  let visibleContact =
    searchUser.length === 0 ? user || menuConfig : findContact();
  // console.log(user);

  return (
    <ul className={s.list}>
      {visibleContact.map((config) => {
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
      {/* <img src= {process.env.PUBLIC_URL + '/images/avatarBob.png'}  width='300' height='300' alt = '' /> */}
    </ul>
  );
}
