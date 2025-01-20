import React from 'react'

const Navbar = () => {
  return (
    <div className="flex justify-between p-3 bg-gray-200 fixed w-full z-10">
      <div className='px-2'>BGremover</div>

      <div className="flex space-x-40 ">
       <a href='#'className='hover:bg-gray-500 boder rounded px-2' >About</a>
       <a href='#'className='hover:bg-gray-500 boder rounded px-2' >services</a>
       <a href='#'className='hover:bg-gray-500 boder rounded px-2' >Contact</a>
      </div>

      <div className='px-2 space-x-2'>
    
       <button className='border-2 border-gray-700 rounded px-3  hover:bg-gray-500'>login</button>
        <button className='border-2 border-gray-700 rounded px-3 hover:bg-gray-500 '>signup</button>
        </div>
    </div>
  )
}

export default Navbar
