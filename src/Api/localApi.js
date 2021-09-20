import axios from "axios";

export default function localApi(query) {
  const BASE_URL = "http://localhost:3000/messages";
  const defaultID = `WYZpppK7Js`;

  return axios
    .get(`${BASE_URL}?id=${query === "" ? defaultID : query}`)
    .then(function (response) {
      // handle success

      // console.log(response);

      return response;

      // setData(response.data[0].dialogue);
      // setName(response.data[0].senderName);
      // setAvatar(response.data[0].avatar);
    })
    .catch(function (error) {
      // handle error
      console.log("error from json server", error);
    });
}
