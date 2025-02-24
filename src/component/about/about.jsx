import React from "react";

const About = () => {
  return (
    <div className="mt-[12%]">
     <div className="z-[-1] absolute top-[89%] left-[-9%] ">
      
      <img  className=" transform -scale-x-100" src="Group 1.png"></img>
      </div> 
      {/* Steps Section */}
      <div className="bg-[#716FFA] border rounded-[219px] mt-9 py-14 relative">
       
      

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-3">How to use the background remover</h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Easily remove backgrounds from your images in three simple steps.<br></br> Upload your image, let our AI process it, and download the result instantly.
          </p>
        </div>

        {/* Steps */}
        <div className="flex justify-center items-center gap-1 px-4">
          {/* Step 1 */}
          <div className="bg-white shadow-lg mr-3 ml-3 rounded-lg p-6 w-64 text-center">
            <div className="flex justify-center mb-4">
              <img src="/upload-icon.png" alt="Upload" className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold mb-2">1. Upload</h3>
            <p className="text-gray-600 text-sm">
              Select or drag your image to start the process.
            </p>
          </div>

          {/* Arrow */}
          <div className="hidden max-h-[12%] max-w-[9%] md:block">
            
            <img src="Vector 13.png " className="  "></img>
              
            
          </div>

          {/* Step 2 */}
          <div className="bg-white mr-3 ml-3 shadow-lg rounded-lg p-6 w-64 text-center">
            <div className="flex justify-center mb-4">
              <img src="/remove-icon.png" alt="Remove" className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold mb-2">2. Remove</h3>
            <p className="text-gray-600 text-sm">
              Our AI processes the image to remove the background.
            </p>
          </div>

          {/* Arrow */}
          <div className="hidden max-h-[12%] max-w-[9%] md:block">
            
            <img src="Vector 13.png " className="  "></img>
              
            
          </div>

          {/* Step 3 */}
          <div className="bg-white mr-3 ml-3  shadow-lg rounded-lg p-6 w-64 text-center">
            <div className="flex justify-center mb-4">
              <img src="/download-icon.png" alt="Download" className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold mb-2">3. Download</h3>
            <p className="text-gray-600 text-sm">
              Download your new image with the background removed.
            </p>
          </div>
        </div>
      </div>

      {/* Additional Segment */}
      <div className="py-16 flex my-12  text-center">
        <div className="z-[-2] max-w-[22%] mx-auto">
          <img src="img1.png"></img>
          </div>
        
         <div className="mr-[12%]">
        <h2 className="text-3xl font-bold text-gray-800  mb-6">Remove Backgrounds <br></br>in just one click.</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          Upload any image, and our advanced AI technology<br></br> will seamlessly remove the background in seconds.<br></br> Perfect for creating professional-quality images for<br></br> e-commerce, presentations, or personal use.
        </p>
        </div> 
        
        </div>
     
    </div>
  );
};

export default About;
