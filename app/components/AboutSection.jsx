"use client";

import React from 'react'
import Image from 'next/image';
import CustomButton from './CustomButton';

const AboutSection = () => {
    const requestOptions = [ 'How It Works'];
  return (
    <>
      {/* Code for larger screens */}
      <div className="hidden lg:block">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-4 px-4 xl:gap-1 sm:py-16 xl:px-16">
        <Image 
            src="/about1.svg"
            alt="/any device img"
            width={500}
            height={500}
            className='object-contain'/>
          <div>
            <h2 className='text-center lg:text-left text-xl font-bold lg:text-2xl'>Within your fingertips!</h2>
            <p className='text-base lg:text-lg text-left'>
              Use any devices to process your building permit; phone, tablet or your personal computer. One click away to process your building!
            </p>
          </div>
          <div>
            <h2 className='text-center lg:text-left text-xl font-bold lg:text-2xl'>Legal and Secure Information</h2>
            <p className='text-base lg:text-lg text-left'>
              Engineered best to protect your personal information and interest. Rest assured that your data are well secured within our system. 
            </p>
          </div>
          <Image 
            src="/about2.svg"
            alt="/data management image"
            width={500}
            height={500}
            className='object-contain'/>
        </div>
      </div>

      {/* Code for smaller screens */}
      <div className="lg:hidden">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
          <Image 
            src="/about1.svg"
            alt="/any device img"
            width={500}
            height={500}
            className='object-contain'/>
          <div>
            <h2 className='text-center lg:text-left text-xl font-bold lg:text-2xl mb-4'>Within your fingertips!</h2>
            <p className='text-base lg:text-lg text-left'>
              Use any devices to process your building permit; phone, tablet or your personal computer. One click away to process your building!
            </p>
          </div>
          <Image 
            src="/about2.svg"
            alt="/data management image"
            width={500}
            height={500}
            className='object-contain'/>
          <div>
            <h2 className='text-center lg:text-left text-xl font-bold lg:text-2xl mb-4'>Legal and Secure Information</h2>
            <p className='text-base lg:text-lg text-justify hidden sm:block'>
            Engineered best to protect your personal information and interest. Rest assured that your data are well secured within our system. 

            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
