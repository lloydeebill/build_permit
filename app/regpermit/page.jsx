'use client'

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RegistrationForm from "../components/RegistrationForm";

const HowItWorks= () => {

  return (
    <main>
        <Navbar/>
        <div className="mt-28 container mx-auto px-12 py-0">
          <div>
          <RegistrationForm/>
          </div>
        </div>
        <Footer/>
    </main>
  )
};

export default HowItWorks;
