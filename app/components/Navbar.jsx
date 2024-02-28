"use client";

import React, { useState } from 'react';
import NavLink from './NavLink';
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import MenuOverlay from './MenuOverlay';
import Image from 'next/image';

const navLinks = [
    {
        title: "Home",
        path: "/",
    },
    {
        title: "About",
        path: "/howitworks",
    },
    {
        title: "Contact",
        path: "#footer",
    },
    {
        title: "Login",
        path: "/",
    },
]; 


const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <nav className='fixed top-0 left-0 right-0 z-10 bg-red-600 bg-opacity-90 shadow-2xl shadow-blue-400'>
            <div className="flex flex-wrap items-center justify-between mx-auto px-10 py-2">
            <Image 
            src="/navlogo.svg"
            alt="/Building Permit Logo"
            width={60}
            height={0}
            sizes="100vw"
            className='object-contain'/>
                <div className="mobile-menu block md:hidden">
                    {!navbarOpen ? (
                        <button onClick={() => setNavbarOpen(true)}className="flex items-center px-3 py-2 text-white hover:text-blue hover:border-white">
                            <Bars3Icon className="h-7 w-7"/>
                        </button>
                    ) : (
                        <button onClick={() => setNavbarOpen(false)} className="flex items-center px-3 py-2 border rounded border-slate-900  text-white hover:text-white hover:border-white">
                            <XMarkIcon className="h-5 w-5"/>
                        </button>
                        )
                    }
                </div>
                <div className='menu hidden md:block md:w-auto' id='navbar'>
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks} /> :null}
        </nav>
  );
};

export default Navbar;