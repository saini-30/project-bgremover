import React from 'react';

const End = () => {
  return (
    <div className="">
      <h1 className="text-center text-3xl font-semibold my-9">HD Quality Result</h1>
      <div className="flex justify-center mb-4">
        <img 
          src="image 2.png"
          alt="Sample" 
          className="w-full max-w-[55%] object-cover"
        />
      </div>

      <div className=" bg-[url('bg.png')] bg-cover max-w-full max-h-full ">
        <div className="flex justify-around pt-40  pb-12  items-center">
            <div>
              <h1 className='font-sm'>Explore more about us.</h1>
              <div className='flex mt-2'>
                <img className='max-w-8' src="x.png"></img>
                <img className='max-w-8' src="x.png"></img>
              </div>
            </div>

            <div>
              <h1 className='font-bold text-5'>Get in touch</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br></br>Accusantium alias eius iusto consequatur eveniet numquam </p>
              <div className='flex my-4'>
                <input type="text" className='border rounded-md' placeholder="Enter Your Email"></input>
                <button className='bg-blue-600 p-2 rounded-3xl mx-3 '>Subscribe</button> 
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default End;
