import * as yup from "yup";

export const schema = yup
  .string()
  .required("URL is required!")
  .matches(
    /(https?:\/\/)?([\w\-])+\.{1}([a-zA-Z]{2,63})([\/\w-]*)*\/?\??([^#\n\r]*)?#?([^\n\r]*)/,
    "Invalid URL"
  );
