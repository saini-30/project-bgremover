import React from 'react'


const Bg = () => {
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
     

      <div className='flex  items-center justify-center  '>
        <div className='w-96 h-96 '>
       <img className=' object-fill my-11 py-12 pl-12' src="/demo.png" alt="demophoto" />
        </div>
        <div className=' mr-20 ml-3 '>
          <img className='max-w-44 rotate-12' src='vector 13.png' />
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
        <div className='flex justify-center mt-6 '  ><button className='border px-2 bg-blue-500 rounded-full border-blue-500  p-1' >upload images</button></div>
        <h1 className='ml-16 text-sm mt-3 f'>JPG or PNG  10 MB max</h1>

       </div>

       </div>
      </div>   

    </div>
  )
}

export default Bg