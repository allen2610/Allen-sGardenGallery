"use client"

import React from 'react'
import GarisTiga from '@/public/Line 3.png'
import Tas from '@/public/Bag.png'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const Navbar = () => {
    const [isOpen,setIsOpen] = useState(false)
    
    useEffect(() =>{
        console.log(isOpen);
    }, [isOpen])

  return (
    <div className='p-3 h-100 flex text-lg justify-between font-belgian items-center'>
        <div onClick={() => setIsOpen(prev => !prev)}>
            <Image className='cursor-pointer'
                src={GarisTiga}
                width={30}
            />
        </div>
        
        <div>
            Allen's Garden Gallery
        </div>
        <Image
            src={Tas}
            width={30}
        />

        <div className={`w-[350px] h-screen absolute left-0 top-0 bg-white border-r-2 justify-between border-black ${isOpen? "translate-x-0":"translate-x-[-500px]"} flex flex-col items-center gap-5 py-16 transition-all duration-800`}>
            <p className='absolute top-4 right-8 cursor-pointer' onClick={() => setIsOpen(prev => !prev)}>
                close
            </p>
            <div className='text-center text-2xl space-y-6'>
                <p>
                    H O M E
                </p>
                <p>
                    P R O D U C T S
                </p>
            </div>
            <p>
                Allen's Garden Gallery
            </p>
        </div>
    </div>
  )
}

export default Navbar
