import alise from "../images/avatarAlise.png";
import josie from "../images/avatarjosefine.png";
import watson from "../images/avatartWatson.png";
import maks from "../images/avatarmax.png";
import peter from "../images/avatarPeter.png";
import bob from "../images/avatarBob.png";

const menuConfig = [
  {
    avatar: alise,
    id: "WYZpppK7Js",
    name: "Alice",
  },

  {
    avatar: josie,
    id: "a3n64axP16",
    name: "Josefine",
  },
  {
    avatar: peter,
    id: "bp16qLx1dv",
    name: "Peter",
  },
  {
    avatar: maks,
    id: "MXkLNGJPDD",
    name: "Maks",
  },
  {
    avatar: watson,
    id: "O_C4OhMNY_",
    name: "Watson",
  },
  {
    avatar: bob,
    id: "tBSEHA7n0K",
    name: "Bob",
  },
];

const defaultUserId = menuConfig[0].id;

function findUser(senderId) {
  return menuConfig.find((config) => config.id === senderId);
}

export { menuConfig, findUser, defaultUserId };
