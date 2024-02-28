import { React , useState } from 'react';
import { UserIcon, UserCircleIcon, CheckCircleIcon } from "@heroicons/react/24/solid";
import ReCAPTCHA from "react-google-recaptcha";
import Image from 'next/image';

const RegistrationForm = () => {

  const [acceptedTerms, setAcceptedTerms] = useState(false);

  // This function will be called when the reCAPTCHA is verified
  const onReCAPTCHAChange = (value) => {
    console.log("Captcha value:", value);
    // You can use the reCAPTCHA value for further backend verification
  };

  return (
    <div className="bg-slate-100 shadow-lg mx-0 sm:mx-auto my-4 p-2 sm:p-6 lg:p-8 max-w-xl w-full relative">
      <div className="text-center mb-2">
        <h2 className="sm:lg:text-lg text-base font-semibold text-black mb-2">REGISTER ACCOUNT</h2>
        <Image 
         src="/logohero.svg" // Path to your image
         alt="Building Permit Logo" // Alt text for the image
         width={100} // Width of the image in pixels
         height={60} // Height of the image in pixels, replace 0 with the desired height
         className='inline-block' // This will display your image as an inline element
        />
      </div>
      <div className="mb-4">
        <div className="flex justify-center items-center mb-2">
          <UserIcon className="h-4 w-4 relative mr-2" />
          <h3 className=" text-base font-semibold mb-0 mr-2 text-[#C41818] ">REGISTRANT PROFILE</h3>
        </div>
        <p className="text-xs mb-2 pr-2">Input your personal information:</p>
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
          <input type="text" placeholder="FIRST NAME" className="border lg:text-lg text-base lg:pb-1 lg:px-2 pb-0 px-0 rounded" />
          <input type="text" placeholder="MIDDLE NAME" className="border lg:text-lg text-base lg:pb-1 lg:px-2 pb-0 px-0 rounded" />
          <input type="text" placeholder="LAST NAME" className="border lg:text-lg text-base lg:pb-1 lg:px-2 pb-0 px-0 rounded" />
          <input type="text" placeholder="EXTENSION NAME (e.g., Jr, III)" className="border lg:text-lg text-base lg:pb-1 lg:px-2 pb-0 px-0 rounded" />
        </div>
      </div>

      <div className="mb-4 border-t-2 pt-2">
          <div className="flex justify-center items-center mb-2">
          <UserCircleIcon className="h-4 w-4 relative mr-2" />
          <h3 className="text-base font-semibold mb-0 mr-2 text-[#C41818]">ACCOUNT DETAILS</h3>
        </div>
        <p className="text-xs mb-2 pr-2">Input your desired account information:</p>
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
          <input type="text" placeholder="USERNAME" className="border lg:text-lg text-base lg:pb-1 lg:px-2 pb-0 px-0 rounded" />
          <input type="password" placeholder="PASSWORD" className="border lg:text-lg text-base lg:pb-1 lg:px-2 pb-0 px-0 rounded" />
          <input type="email" placeholder="EMAIL ADDRESS" className="border lg:text-lg text-base lg:pb-1 lg:px-2 pb-0 px-0 rounded" />
        </div>
      </div>

      <div className="mb-4 border-t-2 pt-2">
        <div className="flex justify-center items-center mb-2">
          <CheckCircleIcon className="h-4 w-4 relative mr-2" />
          <h3 className="text-base font-semibold mb-0 mr-2 text-[#C41818]">TERMS AND CONDITIONS</h3>
        </div>
        <div className="text-xs">
          <ul className="list-disc list-inside">
            <li>The information provided is certified as true and correct.</li>
            <li>Registrant should not create multiple false accounts.</li>
            <li>Registrant should keep their account credentials and will not share to anyone.</li>
            <li>In accordance to R.A. 10173 or Data Privacy Act, all collected information will be treated with utmost confidentiality and will not be subjected to public disclosure.</li>
          </ul>
          <div className="flex justify-center items-center mt-2 mb-2">
            <input type="checkbox" id="acceptTerms" checked={acceptedTerms} onChange={(e) => setAcceptedTerms(e.target.checked)} />
            <label htmlFor="acceptTerms" className="ml-2 text-xs">I ACCEPT THE TERMS AND CONDITIONS</label>
          </div>
        </div>
        <div className="mt-2 mb-2">
          <ReCAPTCHA
            className="g-recaptcha"
            sitekey="YOUR_RECAPTCHA_SITE_KEY"
            onChange={onReCAPTCHAChange}
          />
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <button
          className="bg-[#C41818] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          disabled={!acceptedTerms} // Disable the button if terms are not accepted
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default RegistrationForm;
