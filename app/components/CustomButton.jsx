import React from 'react';

const CustomButton = ({ buttonText, href }) => {
  const handleButtonClick = () => {
    window.location.href = href;
  };

  return (
    <button onClick={() => handleButtonClick()} className="text-white place-items-center px-12 py-4 sm:w-fit rounded-full font-semibold text-lg lg:text-xl bg-[#C41818] hover:bg-blue-400 my-10">
      {buttonText}
    </button>
  );
};

export default CustomButton;