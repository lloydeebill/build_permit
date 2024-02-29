'use client'

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BuildingPermitForm from "../components/BuildingPermitForm";
import PoweredBy from "../components/PoweredBy";

const HowItWorks= () => {

  return (
    <main>
        <Navbar/>
        <div className="mt-28 container  mx-auto px-12 py-0 pb-10">
          <div className="">
          <BuildingPermitForm/>
          <PoweredBy/>
          </div>     
        </div>
        <Footer/>
    </main>
  )
  
};



export default HowItWorks;
