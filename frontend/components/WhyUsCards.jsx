import React from 'react'
import Image from 'next/image'

export const WhyUsCards = ({img_src,title,description}) => {
  return (
    <div className="bg-[#d8efea] h-[20rem] w-[30rem]">
    <div className="text-black flex flex-col items-center mt-12">
    <img  className="flex h-[5rem]" src={img_src} alt="" />
    <p className='text-2xl font-medium mt-6'>{title}</p>
    <p className='w-[24rem] mt-5'>{description}</p>
    </div> 
    </div>
  )
}
