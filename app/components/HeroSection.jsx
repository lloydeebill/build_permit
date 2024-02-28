"use client";
import React from 'react';
import Image from 'next/image';
import LoginFormPopover from './LoginFormPopover';
import CustomButton from './CustomButton';

const HeroSection = () => {

  const requestOptions = [ 'How It Works'];

  return (
    <section className='grid grid-cols-1 lg:grid-cols-12 my-4'>
      <div className='col-span-6 place-self-center place-items-center grid lg:place-items-start'>
        <div className="mb-4 lg:text-left text-center">
          <h1 className='max-w-2xl lg:pt-0 pt-10 mb-2 lg:text-6xl text-4xl font-extrabold'>Register & Request Building Permit!</h1>
          <p className='text-base font-semibold sm:text-lg lg:text-2xl text-[#C41818]'>Online Building Permit Registration</p>
        </div>
        <div className="lg:flex lg:justify-start lg:space-x-2">
          <LoginFormPopover/>
          {/* Replace or complement the Register button with the Popover */}
          <CustomButton buttonText="Register" href="/regpermit"/>
        </div>
      </div>

      <div className='col-span-6 place-self-center mt-4 lg:mt-0'>
        <div className='w-[150px] h-[150px] lg:w-[500px] lg:h-[500px] relative'>
          <Image
            src="/logohero.svg"
            alt="hero image"
            layout='fill' // Ensure correct layout prop for responsive behavior
            objectFit='contain' // Adjust as necessary for your design
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
