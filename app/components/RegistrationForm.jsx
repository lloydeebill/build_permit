import { React , useState } from 'react';
import { UserIcon, UserCircleIcon, CheckCircleIcon } from "@heroicons/react/24/solid";
import ReCAPTCHA from "react-google-recaptcha";


const RegistrationForm = () => {

  const [acceptedTerms, setAcceptedTerms] = useState(false);

  // This function will be called when the reCAPTCHA is verified
  const onReCAPTCHAChange = (value) => {
    console.log("Captcha value:", value);
    // You can use the reCAPTCHA value for further backend verification
  };

  return (
    <div className="bg-slate-100 rounded-lg shadow-lg mx-0 sm:mx-auto my-4 p-2 sm:p-6 lg:p-8 max-w-xl w-full relative overflow-auto max-h-[80vh]">

      
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <h3 className="text-sm font-semibold mb-0 mr-2 text-[#C41818]">REGISTRANT PROFILE</h3>
          <UserIcon className="h-6 w-6 relative" />
        </div>
        <p className="text-xs mb-2">Input your personal information</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input type="text" placeholder="FIRST NAME" className="border text-lg lg:pb-1 lg:px-2 pb-0 px-0 rounded" />
          <input type="text" placeholder="MIDDLE NAME" className="border text-lg lg:pb-1 lg:px-2 pb-0 px-0 rounded" />
          <input type="text" placeholder="LAST NAME" className="border text-lg lg:pb-1 lg:px-2 pb-0 px-0 rounded" />
          <input type="text" placeholder="EXTENSION NAME (e.g., Jr, III)" className="border text-lg lg:pb-1 lg:px-2 pb-0 px-0 rounded" />
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-center mb-2">
          <h3 className="text-sm font-semibold mb-0 mr-2 text-[#C41818]">ACCOUNT DETAILS</h3>
          <UserCircleIcon className="h-6 w-6 relative" />
        </div>
        <p className="text-lg mb-2">Input your desired account information</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input type="text" placeholder="USERNAME" className="border text-lg lg:pb-1 lg:px-2 pb-0 px-0 rounded" />
          <input type="password" placeholder="PASSWORD" className="border text-lg lg:pb-1 lg:px-2 pb-0 px-0 rounded" />
          <input type="email" placeholder="EMAIL ADDRESS" className="border text-lg lg:pb-1 lg:px-2 pb-0 px-0 rounded" />
          <input type="password" placeholder="VERIFY PASSWORD" className="border text-lg lg:pb-1 lg:px-2 pb-0 px-0 rounded" />
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-center mb-2">
          <h3 className="text-sm font-semibold mb-0 mr-2 text-[#C41818]">TERMS AND CONDITIONS</h3>
          <CheckCircleIcon className="h-6 w-6 relative" />
        </div>
        <div className="text-xs">
          <p>Registration</p>
          <ul className="list-disc list-inside">
            <li>The information provided is certified as true and correct.</li>
            <li>Registrant should validate their account by clicking the verification link sent to the supplied email address.</li>
            <li>Registrant should not create multiple false accounts.</li>
            <li>Registrant should keep their account credentials and will not share to anyone.</li>
          </ul>
          <p>Disclaimer</p>
          <p>In accordance to R.A. 10173 or Data Privacy Act, all collected information will be treated with utmost confidentiality and will not be subjected to public disclosure.</p>
          <div className="flex items-center mt-2">
            <input type="checkbox" id="acceptTerms" checked={acceptedTerms} onChange={(e) => setAcceptedTerms(e.target.checked)} />
            <label htmlFor="acceptTerms" className="ml-2 text-xs">I ACCEPT THE TERMS AND CONDITIONS</label>
          </div>
        </div>
        <div className="mt-2">
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
