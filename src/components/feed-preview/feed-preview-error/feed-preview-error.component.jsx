import React from "react";

import { AiOutlineReload } from "react-icons/ai";

const FeedPreviewError = ({ checkIfUrlIsValid }) => {
  return (
    <div className="feed-preview-error">
      <section className="feed-preview-error__content">
        <p className="feed-preview-error__content__p">
          Sorry, some error occured :(
        </p>
        <button
          className="feed-preview-error__content__button"
          onClick={checkIfUrlIsValid}
        >
         <p>Try again</p>
          <AiOutlineReload />
        </button>
      </section>
    </div>
  );
};

export default FeedPreviewError;
