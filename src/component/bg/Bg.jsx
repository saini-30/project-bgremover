  import React, { useState } from "react";

  import { useNavigate } from "react-router-dom";
  const Bg = () => {
    const [loading, setLoading] = useState(false); // State to show loading spinner
    const removeBgApiKey = "G9EVNn9Jk5UwtSoGcexW3qo1"; // Replace with your API key
    const navigate = useNavigate();
    
    // Handle file selection
    const handleFileChange = async (event) => {
      const file = event.target.files[0];

      if (!file) {
        return;
      }

      // Ensure the file is an image
      if (!file.type.startsWith("image/")) {
        alert("Please select a valid image file.");
        return;
      }
        

      // Create a preview of the original image
      const reader = new FileReader();
      reader.onload = async (e) => {
        const originalImageUrl = e.target.result;

        navigate("/preview", {
          state: {
            originalImage: originalImageUrl,
            processedImage: null, // Placeholder for processed image
          },
        });

        const processedImageUrl = await processImage(file);

        navigate("/preview", {
          state: {
            originalImage: originalImageUrl,
            processedImage: processedImageUrl,
          },
        });
      };
      reader.readAsDataURL(file);
    };
    
       
  const processImage = async (file) => {
    setLoading(true);

    const formData = new FormData();
    formData.append("image_file", file);
    formData.append("size", "auto");

    try {
      const response = await fetch("https://api.remove.bg/v1.0/removebg", {
        method: "POST",
        headers: {
          "X-Api-Key": removeBgApiKey,
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to process image.");
      }

      const blob = await response.blob();
      return URL.createObjectURL(blob); // Return the processed image URL
    } catch (error) {
      console.error("Error removing background:", error);
      alert("Failed to remove background. Please try again.");
      return null;
    } finally {
      setLoading(false);
    }
  };

  const handleUploadClick = () => {
    document.getElementById("fileInput").click();
  };



    return (
      <div className=' felx flex-rows-3  pt-[10%]  '>

      <div className='static text-4xl text-center max-h-[13rem] '> 
        <h1>free to remove background</h1>
        
          <img className=' w-96 mx-auto absolute top-[22%] left-[35%] ' src='Group 2.png' />
          <div className='absolute top-[12%] right-28 '>
          <img className='  w-[49%] mx-auto' src='Polygon 1.png' />
        </div>
        <div className='relative top-32 -left-[40%] '>
          <img className='  w-[7%] rotate-180 mx-auto' src='Polygon 1.png' />
        </div>
        </div>
      

        <div className='flex  items-center justify-center mt-12 '>
          <div className='w-96 h-96 '>
        <img className=' object-fill my-11 py-12 pl-12' src="/demo.png" alt="demophoto" />
          </div>
          <div className=' mr-20 ml-3 '>
            <img className='max-w-44 rotate-12' src='Vector 13.png' />
          </div>
        <div className=' relative  '>
          <div>
          <img className='max-w-96' src="/Rectangle 1.png"  />
          </div>

          <div className='absolute  top-6 right-12'>

        <div className='flex justify-center '>
          <img className='w-12 h-10' src="/Vector.png"  />
          </div> 
          <div className='my-2'>
          <h1 className='text-xl'>Drag and drop your image here</h1>
          </div>
          <div className='flex justify-center mt-6 '  >
            <button className='border px-2 bg-blue-500 rounded-full border-blue-500  p-1'  onClick={handleUploadClick} disabled={loading} >   {loading ? "Processing..." : "Upload images"}</button>
            <input
          type="file"
          id="fileInput"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
            <input
            type="file"
            id="fileInput"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleFileChange}
            />
        
          </div>
          <h1 className='ml-16 text-sm mt-3 f'>JPG or PNG  10 MB max</h1>

        </div>

        </div>
        </div>   

      </div>
    )
  }

  export default Bg