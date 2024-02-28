import { React } from 'react';

const MenuButton = ({ buttonText, href, isRegisterButton }) => {
  const handleButtonClick = () => {
    window.location.href = href;

  };

  return (
      <button onClick ={() => handleButtonClick ()}
        className={`relative lg:w-48 mt-2 px-12 py-4 w-full sm:w-fit rounded-full font-semibold text-lg lg:text-xl ${
          isRegisterButton
            ? 'border-2  sm:w-fit border-[#3D5EF8] text-[#3D5EF8] bg-white hover:text-blue-900'
            : 'bg-[#C41818] text-white hover:bg-blue-400'
        }`}
      >
        {buttonText}
      </button>
  );
};

export default MenuButton;
