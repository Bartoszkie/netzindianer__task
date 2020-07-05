import React from "react";

//Components
import FeedPreviewErrorButton from "./feed-preview-error-button/feed-preview-error-button.component";
import FeedPreviewErrorTitle from "./feed-preview-error-title/feed-preview-error-title.component";

class FeedPreviewErrorComponent extends React.Component {
  static Button = FeedPreviewErrorButton;
  static Title = FeedPreviewErrorTitle;

  render() {
    const children = React.Children.map(this.props.children, (child) =>
      React.cloneElement(child)
    );
    return (
      <div className="feed-preview-error">
        <section className="feed-preview-error__content">{children}</section>
      </div>
    );
  }
}

export default FeedPreviewErrorComponent;
