import React from 'react'
import HeaderImage from '@/public/Frame 24.png' 
import Image from 'next/image'

const Header = () => {
  return (
    <div className='font-belgian text-white bg-bunga h-[350px] flex flex-col justify-center items-center text-center'>
        <h1 className='text-4xl'>
          Where Nature Meets Elegance
        </h1>
        <h2 className='text-2xl'>
          Welcome to Allen's Garden Gallery
        </h2>
    </div>
  )
}

export default Header
