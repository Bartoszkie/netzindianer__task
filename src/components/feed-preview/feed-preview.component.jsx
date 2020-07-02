import React, { useState, useEffect } from "react";
import { schema } from "./feed-preview.utils";

//axios
import { fetchDataThroughParser } from "../../axios/feed-preview-requests/feed-preview-requests";

const FeedPreview = ({ url }) => {
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState(false);

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
      console.log("responseFromParser: ", responseFromParser.data.items);
      setError(false);
    }
  };

  useEffect(() => {
    checkIfUrlIsValid();
  }, []);

  return (
    <div className="feed-preview">
      <div className="feed-preview__content">
        {isValid ? (
          <p>Przekazany jest valid</p>
        ) : (
          <p>Przekazany jest chujowy</p>
        )}

        {error ? (
          <p>Error occured</p>
        ) : (
          <p>Error nie ma kurwa</p>
        )}
      </div>
    </div>
  );
};

export default FeedPreview;
