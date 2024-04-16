import React from 'react'
import Image from "next/image"

const HoverImageOverlay = ({src, alt}) => {
  return (
    <div className="w-full relative group">
      <Image src={src} alt={alt} width={350} height={350} />
      <div className="absolute bottom-0 bg-gradient-to-b from-transparent to-black/50 left-0 w-full h-[100px] opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
        <button className='bg-black px-8 py-2 text-white '>
          SEE DETAIL
        </button>
      </div>
    </div>
  );
};

export default HoverImageOverlay;
