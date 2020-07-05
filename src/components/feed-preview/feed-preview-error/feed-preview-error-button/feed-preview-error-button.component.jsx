import React from "react";
import { AiOutlineReload } from "react-icons/ai";

const FeedPreviewErrorButton = ({ checkIfUrlIsValid, children }) => {
  return (
    <button
      className="feed-preview-error__content__button"
      onClick={checkIfUrlIsValid}
    >
      {children}
      <AiOutlineReload />
    </button>
  );
};

export default FeedPreviewErrorButton;
