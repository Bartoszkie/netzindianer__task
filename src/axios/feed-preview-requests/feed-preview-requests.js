import axios from "axios";
const staticUrl = "https://api.rss2json.com/v1/api.json?rss_url=";

export const fetchDataThroughParser = (url) => {
  return axios
    .get(`${staticUrl}${url}`)
    .then((response) => response)
    .catch((error) => error);
};
