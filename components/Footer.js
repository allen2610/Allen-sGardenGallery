import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-row p-16 bg-black text-white font-belgian text-lg justify-around'>
      <div className='space-y-5'>
        <h1 className='text-3xl'>
            Allen's Garden Gallery
        </h1>
        <div className='flex flex-col gap-5'>
            <a> Home </a>
            <a> Products </a>
        </div>
      </div>
      <div className='space-y-5 min-w-5'>
        <h1 className='text-3xl'>
            Contact Us
        </h1>
        <p classname='flex'>
            allengardengallery@gmail.com
        </p>
      </div>
    </div>
  )
}

export default Footer
