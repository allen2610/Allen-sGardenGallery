import React from 'react'
import Image from 'next/image'
import HoverImageOverlay from './HoverImageOverlay';

const Introduction = ({title, description, price, src, classname}) => {
  return (
    <div className={`flex w-[1150px] my-16 justify-between ${classname}`}>
      <div className='flex flex-col justify-between gap-4'>
        <div className='flex flex-col gap-6 max-w-[350px] lg:max-w-[500px]'>
            <h1 className='text-lg'>
                I N T R O D U C I N G
            </h1>
            <h2 className='text-3xl'>
                {title}
            </h2>
            <p>
                {description}
            </p>
        </div>
        <div className='flex flex-row gap-10 items-center'>
            <button className='bg-black text-white p-3'>
                ADD TO CART
            </button>
            {price}
        </div>
      </div>
      <div>
        {/* <Image
          src={src}  
          width={350}    
        /> */}
      </div>
        
    </div>
  )
}

export default Introduction
