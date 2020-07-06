import React, { useState, useEffect } from "react";
import { schema } from "./feed-preview.utils";

//Components
import FeedPreviewCard from "./feed-preview-card/feed-preview-card.component";
import FeedPreviewErrorComponent from "./feed-preview-error/feed-preview-error-class.component";
import Spinner from "../spinner/spinner.component";

//axios
import { fetchDataThroughParser } from "../../axios/feed-preview-requests/feed-preview-requests";

const FeedPreview = ({ url }) => {
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);
  const [responseArrayOfItems, setResponseArrayOfItems] = useState([]);
  const [filteredArrayOfItems, setFilteredArrayOfItems] = useState([]);

  const checkIfUrlIsValid = async () => {
    const isValidSchema = await schema.isValid(url);
    if (isValidSchema) {
      setIsValid(true);
      fetchData();
    } else {
      setIsValid(false);
    }
  };

  const fetchData = async () => {
    const responseFromParser = await fetchDataThroughParser(url);
    setIsLoading(true);
    if (responseFromParser.status !== 200) {
      setError(true);
      setIsLoading(false);
    } else {
      setIsLoading(false);
      setError(false);
      setResponseArrayOfItems(responseFromParser.data.items);
      setFilteredArrayOfItems(responseFromParser.data.items);
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const filterArrayOfItems = () => {
    const results = responseArrayOfItems.filter((item) =>
      item.title.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredArrayOfItems(results);
  };

  useEffect(() => {
    checkIfUrlIsValid();
  }, []);

  useEffect(() => {
    filterArrayOfItems();
  }, [inputValue]);

  return (
    <div className="feed-preview">
      {isLoading ? (
        <Spinner />
      ) : !isValid ? (
        <FeedPreviewErrorComponent>
          <FeedPreviewErrorComponent.Title>
            Passed url is invalid
          </FeedPreviewErrorComponent.Title>
        </FeedPreviewErrorComponent>
      ) : error ? (
        <FeedPreviewErrorComponent>
          <FeedPreviewErrorComponent.Title>
            Sorry, some error occured :(
          </FeedPreviewErrorComponent.Title>
          <FeedPreviewErrorComponent.Button>
            <p>Try Again!</p>
          </FeedPreviewErrorComponent.Button>
        </FeedPreviewErrorComponent>
      ) : filteredArrayOfItems ? (
        <div className="feed-preview__content">
          <div className="feed-preview__content__search">
            <label
              htmlFor="search"
              className="feed-preview__content__search__label"
            >
              Search:
            </label>
            <input
              id="search"
              name="search"
              value={inputValue}
              onChange={handleChange}
              type="text"
              className="feed-preview__content__search__input"
            />
          </div>
          <div className="feed-preview__content__grid">
            {filteredArrayOfItems && filteredArrayOfItems.length !== 0 
              ? filteredArrayOfItems.map((item) => (
                  <FeedPreviewCard key={item.guid} itemData={item} />
                ))
              : null}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default FeedPreview;
