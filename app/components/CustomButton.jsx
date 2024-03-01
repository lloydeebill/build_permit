import React from 'react';

const CustomButton = ({ buttonText, href }) => {
  const handleButtonClick = () => {
    window.location.href = href;
  };

  return (
    <button onClick={() => handleButtonClick()} className="relative lg:w-48 mt-2 px-12 py-4 w-full sm:w-fit rounded-full font-semibold text-lg lg:text-xl border-2 border-black text-green-600 bg-white hover:border-blue-400">
      {buttonText}
    </button>
  );
};

export default CustomButton;
