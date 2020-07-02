import React from "react";
import Parser from "html-react-parser";

const FeedPreviewCard = ({ itemData }) => {
//   console.log("Response aray from card: ", itemData);

  return (
    <div className="feed-preview-card">
      <div className="feed-preview-card__content">
        <header className="feed-preview-card__content__header">
          <p className="feed-preview-card__content__title">{itemData.title}</p>
          <span className="feed-preview-card__content__data">
            {itemData.pubDate}
          </span>
        </header>
        <div className="feed-preview-card__content__main">
          <div className="feed-preview-card__content__main__col">
            <img src={itemData.enclosure.link} alt="feed-image" />
            <a href={itemData.link}>Go to website</a>
          </div>
          <div className="feed-preview-card__content__main__col">
            {/* {Parser(itemData.description)} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedPreviewCard;
