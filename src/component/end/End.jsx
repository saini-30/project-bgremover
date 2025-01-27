import React from 'react';

const End = ()=> {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-center text-2xl font-bold mb-4">HD Quality Result</h1>
      <div className="flex justify-center mb-4">
        <img 
          src="image 2.png"
          alt="Sample" 
          className="w-full max-w-md object-cover"
        />
      </div>
      <div className="text-center mb-6">
        <a href="#" className="text-blue-500">See More Sample &gt;</a>
      </div>
      <div className="bg-purple-100 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Get Updates</h2>
        <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing egestas proin.</p>
        <div className="flex">
          <input 
            type="email" 
            placeholder="Enter Your Email" 
            className="flex-grow p-2 border border-gray-300 rounded-l-lg"
          />
          <button className="bg-blue-500 text-white p-2 rounded-r-lg">Subscribe</button>
        </div>
      </div>
      <div className="flex justify-center mt-4 space-x-4">
        <a href="#" className="text-gray-600"><i className="fab fa-instagram"></i></a>
        <a href="#" className="text-gray-600"><i className="fab fa-facebook"></i></a>
        <a href="#" className="text-gray-600"><i className="fab fa-twitter"></i></a>
      </div>
      <div className="text-center mt-4">
        <a href="#" className="text-gray-600">Explore more about us.</a>
      </div>
    </div>
  );
};

export default End;
