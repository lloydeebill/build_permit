import React, {useState} from 'react';

const StepOne = () => {

 const [selectedPermits, setSelectedPermits] = useState([]);


 const handleCheckboxChange = (event) => {
    const { value, checked} = event.target;
    setSelectedPermits((prev) => {
        if (checked) {
            return [...prev, value];
        } else {
            return prev.filter((item)=> item !== value);
        }
    });
 };
 


  return (
    <div className="container mx-auto px-0">
      <div className="bg-slate-100 p-6 rounded-lg shadow-lg">
        {/* Form starts here */}
        <form>
          {/* Form sections and inputs */}
          <div className="grid gap-6 mb-6 lg:grid-cols-2">
            {/* Left side of the form */}
            <div>
              <label htmlFor="referenceNo" className="block mb-2 text-sm font-medium text-gray-900">REFERENCE NO.</label>
              <input type="text" id="referenceNo" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Auto-Generated" disabled />

              <label htmlFor="applicationNumber" className="block mb-2 text-sm font-medium text-gray-900">APPLICATION NUMBER</label>
              <input type="text" id="applicationNumber" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Auto-Generated" disabled />

              <label htmlFor="areaNo" className="block mb-2 text-sm font-medium text-gray-900">AREA NO.</label>
              <input type="text" id="areaNo" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Enter area number" />
            </div>

            {/* Right side of the form */}
            <div>
              <div className="mb-6">
                <span className="text-sm font-medium text-gray-900">TYPE OF APPLICATION</span>
                <div className="flex items-center mt-2">
                  <input id="typeNew" type="radio" name="typeOfApplication" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                  <label htmlFor="typeNew" className="ml-2 text-sm font-medium text-gray-900">New</label>
                </div>
                <div className="flex items-center mt-2">
                  <input id="typeRenew" type="radio" name="typeOfApplication" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                  <label htmlFor="typeRenew" className="ml-2 text-sm font-medium text-gray-900">Renew</label>
                </div>
                {/* ... More options ... */}
              </div>

              {/* Permit also applies to section */}
            <div className="mb-6">
                <span className="text-sm font-medium text-gray-900">PERMIT ALSO APPLIES TO:</span>
                <div className="grid grid-cols-2 gap-2 mt-3">
                {[
                    { value: 'LocationalClearance', label: 'Locational Clearance' },
                    { value: 'ArchitecturalPermit', label: 'Architectural Permit' },
                    { value: 'FireSafetyEvaluationClearance', label: 'Fire Safety Evaluation Clearance' },
                    { value: 'CivilStructuralPermit', label: 'Civil/Structural Permit' },
                    { value: 'SanitaryPermit', label: 'Sanitary Permit' },
                    { value: 'PlumbingPermit', label: 'Plumbing Permit' },
                    { value: 'ElectricalPermit', label: 'Electrical Permit' },
                    { value: 'ElectronicsPermit', label: 'Electronics Permit' },
                    { value: 'MechanicalPermit', label: 'Mechanical Permit' },
    ]           .map((permit) => (
                <label key={permit.value} className="flex items-center">
                    <input
                        type="checkbox"
                        value={permit.value}
                        onChange={handleCheckboxChange}
                        className="form-checkbox h-4 w-4 text-blue-600"
                        id={permit.value}
                    />
                    <span className="ml-2 text-gray-700 text-xs sm:text-sm">{permit.label}</span>
                </label>
                ))}
                </div>
            </div>
             {selectedPermits.length === 0 && (
            <p className="text-red-500 text-xs italic">Permit Also Applies To: cannot be blank.</p>
                )}

            </div>
          </div>

          {/* Buttons */}
        </form>
      </div>
    </div>
  );
};

export default StepOne;
