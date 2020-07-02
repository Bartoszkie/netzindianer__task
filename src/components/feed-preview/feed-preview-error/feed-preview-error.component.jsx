import React from "react";

const FeedPreviewError = ({ checkIfUrlIsValid }) => {
  return (
    <div className="feed-preview-error">
      <p className="feed-preview-error__p">Some error occured - try again!</p>
      <button
        className="feed-preview-error__button"
        onClick={checkIfUrlIsValid}
      >
        Try again
      </button>
    </div>
  );
};

export default FeedPreviewError;
