"use client";

import React from 'react'
import Image from 'next/image';
import { CustomButton } from "./index";


const Hero = () => {
  const handleScroll = () => {}
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find special my plants from Korea!
        </h1>

        <p className ="hero__subtitle">
          See how plants are getting grow with our process.
        </p>
      

      <CustomButton
        title="Explore Plants"
        containerStyles="bg-primary-blue text-white rounded-full mt-10"
        handleClick={handleScroll}
      />
      </div>
      

      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.jpg" alt="hero" fill className="object-contain"/>
          <div className="hero__image-overlay"/>
        </div>
      </div>
      </div>
   

     

  )
}

export default Hero