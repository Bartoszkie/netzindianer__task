import React from "react";
// import Parser from "html-react-parser";

import { BsFillReplyFill } from "react-icons/bs";

const FeedPreviewCard = ({ itemData }) => {
  return (
    <div className="feed-preview-card">
      <div className="feed-preview-card__content">
        <header className="feed-preview-card__content__header">
          <img src={itemData.enclosure.link} alt="feed" />
        </header>
        <div className="feed-preview-card__content__main">
          <div className="feed-preview-card__content__main__col">
            <div className="feed-preview-card__content__main__col__title">
              <span>Title:</span>
              <p>{itemData.title}</p>
            </div>
            <span className="feed-preview-card__content__main__col__date">
              <span>Date: </span>
              <i>{itemData.pubDate}</i>
            </span>{" "}
            <div className="feed-preview-card__goto">
              <a href={itemData.link}>
                Go to website
              </a>
              <BsFillReplyFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedPreviewCard;
