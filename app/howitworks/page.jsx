'use client'

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StepsSection from "../components/StepsSection";
import CalltoAction from "../components/CalltoAction";
import PoweredBy from "../components/PoweredBy";

const HowItWorks= () => {

  return (
    <main>
        <Navbar/>
        <div className="mt-28 container mx-auto px-12 py-0">
          <div className="pb-10">
          <StepsSection/>
          <PoweredBy/>
          </div>
        </div>
        <Footer/>
    </main>
  )
};




export default HowItWorks;
