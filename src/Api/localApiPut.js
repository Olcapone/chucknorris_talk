import axios from "axios";

export default function localApi(user, newMessage) {
  console.log(user);

  const { id, senderName, avatar, dialogue } = user;
  const BASE_URL = "http://localhost:3000/messages";
  const defaultID = `WYZpppK7Js`;

  return axios
    .put(`${BASE_URL}/${id || defaultID}/`, {
      id: id,
      avatar: avatar,
      senderName: senderName,
      dialogue: [...dialogue, newMessage],
    })

    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      // handle error
      console.log("error from json server", error);
    });
}
