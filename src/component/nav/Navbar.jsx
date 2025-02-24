import React from 'react'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-3 bg-gray-200 fixed w-full z-10">
      <div className='px-2'>BGremover</div>

      <div className="flex space-x-40 items-center">
        <a href='#' className='hover:bg-gray-500 border rounded px-2'>About</a>
        <a href='#' className='hover:bg-gray-500 border rounded px-2'>Services</a>
        <a href='#' className='hover:bg-gray-500 border rounded px-2'>Contact</a>
      </div>

      <div className='px-2 space-x-2 max-w-10  flex items-center'>
        <img className='size-10 animate-bounce' src="logo.png" alt="logo"></img>
      </div>
    </div>
  )
}

export default Navbar
