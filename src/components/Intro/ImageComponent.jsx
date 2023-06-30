import React, { useState, useEffect } from "react";
import FirstImage from "../../images/FirstImage.png";
import SecondImage from "../../images/SecondImage.png";

const ImageComponent = () => {
  const [firstImageLoaded, setFirstImageLoaded] = useState(false);
  const [secondImageLoaded, setSecondImageLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSecondImageLoaded(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleFirstImageLoad = () => {
    setFirstImageLoaded(true);
  };

  return (
    <div style={{ position: "relative", marginTop: "-1.8em" }}>
      <img
        src={FirstImage}
        alt="First Image"
        onLoad={handleFirstImageLoad}
        style={{ display: firstImageLoaded ? "block" : "none" }}
      />

      {secondImageLoaded && (
        <img
          src={SecondImage}
          alt="Second Image"
          style={{
            display: "block",
            position: "absolute",
            left: "-45px", // Adjust the left position as per your requirement
            top: "60px", // Adjust the top position as per your requirement
          }}
        />
      )}
    </div>
  );
};

export default ImageComponent;
