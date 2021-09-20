import moment from "moment";

export default function normalizeData() {
  const data = new Date();
  return `${moment(data).format("l")} ${moment(data).format("LT")}`;
}
