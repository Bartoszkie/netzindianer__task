import React, { useState, useEffect } from "react";
import { schema } from "./feed-preview.utils";

const FeedPreview = ({ url }) => {
  const [isValid, setIsValid] = useState(false);

  const checkIfUrlIsValid = async () => {
    const isValidSchema = await schema.isValid(url);
  
    if (isValidSchema) {
      setIsValid(true);
    } else {
      setIsValid(false);
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
      </div>
    </div>
  );
};

export default FeedPreview;
