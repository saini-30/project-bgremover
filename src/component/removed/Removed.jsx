import React from "react";
import { useLocation } from "react-router-dom";

const ImagePreview = () => {
  const location = useLocation();
  const { originalImage, processedImage } = location.state || {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Image Preview</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {/* Original Image Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Original Image</h3>
          {originalImage ? (
            <img src={originalImage} alt="Original" className="w-full max-h-96 rounded-lg object-contain" />
          ) : (
            <p className="text-gray-500">No original image available.</p>
          )}
        </div>

        {/* Processed Image Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Processed Image</h3>
          {processedImage ? (
            <>
              <img src={processedImage} alt="Background Removed" className="w-full max-h-96 rounded-lg object-contain" />
              {/* Download Button - Only Visible When Image is Ready */}
              <a
                href={processedImage}
                download="bg_removed_image.png"
                className="mt-4 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
              >
                Download Image
              </a>
            </>
          ) : (
            <>
              <p className="text-gray-500 mb-2">Processing image, please wait...</p>
              <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500"></div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImagePreview;
