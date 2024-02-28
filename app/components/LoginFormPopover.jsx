// components/LoginFormPopover.js
import { Popover } from '@headlessui/react';
import { useState } from 'react';
import { XMarkIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import LoginForm from './LoginForm'; // Make sure this is the path to your LoginForm component

const LoginFormPopover = () => {
  // Use state to manage the open/close of the popover
  const [isOpen, setIsOpen] = useState(false);

  const togglePopover = () => {
    setIsOpen(!isOpen);
  };

  // Define the onClose function that sets isOpen to false
  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <Popover className="relative">
      <Popover.Button
        onClick={togglePopover}
        className="relative lg:w-48 mt-2 px-12 py-4 w-full sm:w-fit rounded-full font-semibold text-lg lg:text-xl bg-[#C41818] text-white hover:bg-blue-400"
      >
        Request
      </Popover.Button>
      {isOpen && (
        <Popover.Panel static className="absolute z-50">
          {/* Center the Popover.Panel */}
          <div className="fixed inset-0 flex items-center justify-center px-10">
            {/* The container for your form should have a white background, padding, rounded corners, and a drop shadow */}
            <div className="bg-slate-200 p-2 rounded-lg shadow-lg relative">
              {/* Title and Close Button */}
              <div className="flex items-center justify-center mb-4">
                <h2 className="text-center sm:text-lg font-semibold text-[#C41818]">LOGIN ACCOUNT</h2>
                <XMarkIcon className="h-5 w-5 cursor-pointer text-gray-700 absolute top-3 right-4" onClick={onClose} />
              </div>
              <LoginForm />
            </div>
          </div>
        </Popover.Panel>
      )}
    </Popover>
  );
};

export default LoginFormPopover;
