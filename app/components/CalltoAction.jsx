// CalltoAction.js

import React from 'react';
import Link from 'next/link';

const CalltoAction = () => {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-12 pb-10'>
      <div className='col-span-1 lg:col-span-12'>
        <div className='bg-gradient-to-r from-[#C41818] to-[#c4d4fff9] rounded-2xl border border-gray-300 shadow-md py-6 px-4 lg:py-10 lg:px-10 lg:rounded-3xk lg:border lg:border-gray-300 lg:shadow-md lg:z-10 lg:flex lg:items-center lg:justify-around'>
          <div className='text-center lg:text-left lg:col-span-9 lg:self-center'>
            <p className='text-center font-semibold text-4xl py-3'>READY TO BUILD?</p>
            <h1 className='text-center text-white lg:mx-5 mb-4 lg:text-6xl text-2xl font-extrabold'>
              REQUEST YOUR PERMIT NOW
            </h1>
          </div>
          <div className='flex justify-center lg:col-span-3 lg:self-center'>
            <Link href='/' passHref legacyBehavior>
              <a className='text-white place-items-center text-center px-5 py-4 rounded-full font-semibold text-sm lg:text-xl bg-black hover:bg-blue-400'>
                GET STARTED
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalltoAction;
