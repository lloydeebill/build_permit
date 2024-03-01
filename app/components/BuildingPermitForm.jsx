// components/BuildingPermitForm.js
import React, { useState } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';
import StepFive from './StepFive';

import { ArchiveBoxArrowDownIcon, UserCircleIcon, BuildingOfficeIcon, UserGroupIcon, NewspaperIcon } from "@heroicons/react/24/solid";

const BuildingPermitForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5; // Assume there are 5 steps

  const goToNextStep = () => {
    setCurrentStep((prevStep) => (prevStep < totalSteps ? prevStep + 1 : prevStep));
  };

  const goToPreviousStep = () => {
    setCurrentStep((prevStep) => (prevStep > 1 ? prevStep - 1 : prevStep));
  };

  const saveDraft = () => {
    // Implement save draft logic
  };

  return (
    <div className="container mx-auto px-0 py-4">
      <div className="bg-slate-200 rounded-lg shadow-lg lg:px-0 pb-10 overflow-hidden">
        <h1 className="text-xl md:text-2xl font-bold text-center mb-4 md:mb-6 p-4">BUILDING PERMIT APPLICATION</h1>

        {/* Navigation for steps */}
        <div className="flex flex-col md:flex-row justify-between items-stretch border-2 border-green-600 text-black">
          <div className={`flex-1 ${currentStep === 1 ? 'bg-green-600 text-white' : ''}`}>
            <button onClick={() => setCurrentStep(1)} className="w-full h-full flex flex-col items-center justify-center py-2"> 
              <ArchiveBoxArrowDownIcon className='h-5 w-5' />Application
            </button>
          </div>
          <div className={`flex-1 ${currentStep === 2 ? 'bg-green-600 text-white' : ''}`}>
            <button onClick={() => setCurrentStep(2)} className="w-full h-full flex flex-col items-center justify-center py-2"> 
              <UserCircleIcon className='h-5 w-5' />Owner / Applicant
            </button>
          </div>
          <div className={`flex-1 ${currentStep === 3 ? 'bg-green-600 text-white' : ''}`}>
            <button onClick={() => setCurrentStep(3)} className="w-full h-full flex flex-col items-center justify-center py-2"> 
              <BuildingOfficeIcon className='h-5 w-5' />Building Profile
            </button>
          </div>
          <div className={`flex-1 ${currentStep === 4 ? 'bg-green-600 text-white' : ''}`}>
            <button onClick={() => setCurrentStep(4)} className="w-full h-full flex flex-col items-center justify-center py-2">
              <UserGroupIcon className='h-5 w-5' />Full-time Project Inspectors
            </button>
          </div>
          <div className={`flex-1 ${currentStep === 5 ? 'bg-green-600 text-white' : ''}`}>
            <button onClick={() => setCurrentStep(5)} className="w-full h-full flex flex-col items-center justify-center py-2">
              <NewspaperIcon className='h-5 w-5' />Summary
            </button>
          </div>
        </div>

        {/* Conditional rendering of form steps */}
        {currentStep === 1 && <StepOne />}
        {currentStep === 2 && <StepTwo />}
        {currentStep === 3 && <StepThree />}
        {currentStep === 4 && <StepFour />}
        {currentStep === 5 && <StepFive />}

        {/* Form navigation buttons */}
        <div className="flex justify-center gap-4 mt-10 mx-2">
          {currentStep > 1 && <button onClick={goToPreviousStep} className="px-6 py-2 text-sm font-semibold rounded-lg bg-gray-500 text-white">BACK</button>}
          <button onClick={saveDraft} className="px-6 py-2 text-sm font-semibold rounded-lg bg-[#2962fff9] text-white">SAVE AS DRAFT</button>
          {currentStep < totalSteps && <button onClick={goToNextStep} className="px-6 py-2 text-sm font-semibold rounded-lg bg-green-600 text-white">NEXT</button>}
        </div>
      </div>
    </div>
  );
};


export default BuildingPermitForm;
