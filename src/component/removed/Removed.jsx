import React from "react";
import { useLocation } from "react-router-dom";

const ImagePreview = () => {
  const location = useLocation();
  const { originalImage, processedImage } = location.state || {};

  return (
    <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", height: "100vh" }}>
      <div style={{ textAlign: "center", width: "45%" }}>
        <h3>Original Image</h3>
        {originalImage ? (
          <img src={originalImage} alt="Original" style={{ maxWidth: "90%", maxHeight: "80%" }} />
        ) : (
          <p>No original image available.</p>
        )}
      </div>
      <div style={{ textAlign: "center", width: "45%" }}>
        <h3>Processed Image</h3>
        {processedImage ? (
          <img src={processedImage} alt="Background Removed" style={{ maxWidth: "90%", maxHeight: "80%" }} />
        ) : (
          <p>Please wait, background-removed image is being created...</p>
        )}
      </div>
    </div>
  );
};

export default ImagePreview;
