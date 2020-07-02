import React, { useState, useEffect } from "react";
import { schema } from "./feed-preview.utils";

//Components
import FeedPreviewCard from "./feed-preview-card/feed-preview-card.component";
import FeedPreviewError from "./feed-preview-error/feed-preview-error.component";

//axios
import { fetchDataThroughParser } from "../../axios/feed-preview-requests/feed-preview-requests";

const FeedPreview = ({ url }) => {
  const [isValid, setIsValid] = useState(false);
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
    if (responseFromParser.status !== 200) {
      setError(true);
    } else {
      setResponseArrayOfItems(responseFromParser.data.items);
      setFilteredArrayOfItems(responseFromParser.data.items);
      setError(false);
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
      {error ? (
        <FeedPreviewError checkIfUrlIsValid={checkIfUrlIsValid} />
      ) : (
        <div className="feed-preview__content">
          <input
            value={inputValue}
            onChange={handleChange}
            type="text"
            className="feed-preview__content__search"
          />

          {/* {isValid ? (
            <p>Przekazany jest valid</p>
          ) : (
            <p>Przekazany jest chujowy</p>
          )} */}
          {filteredArrayOfItems && filteredArrayOfItems.length !== 0
            ? filteredArrayOfItems.map((item) => (
                <FeedPreviewCard key={item.guid} itemData={item} />
              ))
            : null}
        </div>
      )}
    </div>
  );
};

export default FeedPreview;
