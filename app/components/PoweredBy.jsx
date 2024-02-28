import React from 'react';
import Image from 'next/image';

const PoweredBy = () => {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-12'>
      <div className='col-span-1 lg:col-span-12'>
        <div className='bg-gradient-to-r from-[#c4d4fff9] to-[#C41818]  rounded-3xl border border-gray-300 shadow-md mt-5 py-6 px-4 lg:py-8 lg:px-10 lg:rounded-3xl lg:border lg:border-gray-300 lg:shadow-md lg:z-10 lg:flex lg:items-center lg:justify-around'>
          <div className='lg:flex lg:items-center lg:justify-evenly lg:w-full'>
            <Image 
            src="/4.svg"
            alt="/lgu nasipit logo"
            width={500}
            height={500}
            className='object-contain'/>
            <Image 
            src="/3.svg"
            alt="/engr office logo"
            width={500}
            height={500}
            className='object-contain'/>
            <Image 
            src="/5.svg"
            alt="/builder logo"
            width={500}
            height={500}
            className='object-contain'/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PoweredBy;
