import React, { useState } from 'react';
import BuildingSelection from './BuildingSelection';

const StepThree = () => {
  const [selectedScopes, setSelectedScopes] = useState([]);
  const [province, setProvince] = useState('');
  const [cityMunicipality, setCityMunicipality] = useState('');
  const [barangay, setBarangay] = useState('');
  const [lotNo, setLotNo] = useState('');
  const [blockNo, setBlockNo] = useState('');
  const [tctNo, setTctNo] = useState('');
  const [structOwn, setStructOwn] = useState('');
  const [formOwner, setFormOwner] = useState('');
  const [projectTitle, setProjectTitle] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [numUnits, setNumUnits] = useState('');
  const [numStoreys, setNumStoreys] = useState('');
  const [floorArea, setFloorArea] = useState('');
  const [lotArea, setLotArea] = useState('');
  const [estimatedCost, setEstimatedCost] = useState('');
  const [conManager, setConManager] = useState('');


  const handleScopeChange = (scope) => {
    // Toggle the selection of the scope
    if (selectedScopes.includes(scope)) {
      setSelectedScopes(selectedScopes.filter((selected) => selected !== scope));
    } else {
      setSelectedScopes([...selectedScopes, scope]);
    }
  };

  const handleSubmit = () => {
    // Check if at least one scope is selected
    if (selectedScopes.length === 0) {
      alert('Please select at least one scope of work.');
      // You can handle this case in a way that fits your application's flow
    } else {
      // Proceed with form submission or other actions
      // ...
    }
  };

  // Handlers for input field changes
  // Add more handlers as needed for each input field

  return (
    <div className="container mx-auto px-4 py-4 bg-slate-100">
      <div className="flex flex-wrap -mx-2 gap">
        <div className="w-full md:w-1/2 px-0 ">
          <div className="w-full px-2 pt-4 mb-4 border-2 border-gray-300  rounded-md md:ml-2">
            <div className="mb-4 ">
              <label htmlFor="province" className="block text-sm font-semibold text-gray-700">
                Province:
              </label>
              <input
                type="text"
                id="province"
                value={province}
                onChange={(e) => setProvince(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="city/municipality" className="block text-sm font-semibold text-gray-700">
                City/Municipality:
              </label>
              <input
                type="text"
                id="city/municipality"
                value={cityMunicipality}
                onChange={(e) => setCityMunicipality(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="barangay" className="block text-sm font-semibold text-gray-700">
                Barangay:
              </label>
              <input
                type="text"
                id="barangay"
                value={barangay}
                onChange={(e) => setBarangay(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                required
              />
            </div>
            <div className="mb-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <label htmlFor="lotNo." className="block text-sm font-semibold text-gray-700">
                  Lot No.:
                </label>
                <input
                  type="text"
                  id="Lot No."
                  value={lotNo}
                  onChange={(e) => setLotNo(e.target.value)}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm"
                  required
                />
              </div>
              <div className="col-span-1">
                <label htmlFor="blockNo" className="block text-sm font-semibold text-gray-700">
                  Block No.:
                </label>
                <input
                  type="text"
                  id="blockno"
                  value={blockNo}
                  onChange={(e) => setBlockNo(e.target.value)}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="tctNo" className="block text-sm font-semibold text-gray-700">
                  TCT No.:
                </label>
                <input
                  type="text"
                  id="tctNo"
                  value={tctNo}
                  onChange={(e) => setTctNo(e.target.value)}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="taxNO" className="block text-sm font-semibold text-gray-700">
                  Current Tax Declare No.:
                </label>
                <input
                  type="text"
                  id="taxNO"
                  value={tctNo}
                  onChange={(e) => setTaxNo(e.target.value)}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="structOwn" className="block text-sm font-semibold text-gray-700">
                For Construction Owned by an Enterprise:
              </label>
              <input
                type="text"
                id="structOwn"
                value={structOwn}
                onChange={(e) => setStructOwn(e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="FormOwner" className="block text-sm font-semibold text-gray-700">
                Form of Ownership:
              </label>
              <select
                id="FormOwner"
                value={formOwner}
                onChange={(e) => setFormOwner(e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm"
                required
              >
                <option value="singleOwnership">Single form of ownership</option>
                <option value="singleProprietorship">Single Proprietorship</option>
                <option value="cooperative">Cooperative</option>
                <option value="corporation">Corporation</option>
                <option value="jointVenture">Joint Venture</option>
                <option value="partnership">Partnership</option>
              </select>
            </div>
          </div>

          <div className="w-full px-2 mb-4 border-2 border-gray-300 bg-white rounded-md md:ml-2">
            <div className="mb-4">
              <label htmlFor="buildingSelection" className="block text-sm font-semibold text-gray-700">
                Scope of Work:
              </label>
              <div className="grid grid-cols-2 gap-2">
                {["New Construction", "Erection", "Addition", "Alteration", "Renovation", "Conversion", "Repair", "Moving", "Raising", "Accessory /Building Structure", "Legalization of Existing Building"].map((scope) => (
                  <div key={scope} className="flex items-center">
                    <input
                      type="checkbox"
                      id={scope}
                      checked={selectedScopes.includes(scope)}
                      onChange={() => handleScopeChange(scope)}
                      className="mr-2"
                    />
                    <label htmlFor={scope} className="text-sm text-gray-700">{scope}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 px-4 ">
          <div className="w-full px-2 pt-4 mb-4 border-2 border-gray-300  rounded-md md:ml-2">
            <div className="mb-4">
              <label htmlFor="projectTitle" className="block text-sm font-semibold text-gray-700">
                Project Title:
              </label>
              <input
                type="text"
                id="projectTitle"
                value={projectTitle}
                onChange={(e) => setProjectTitle(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                required
              />
            </div>
            <div className="mb-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <label htmlFor="dateInput" className="block text-sm font-semibold text-gray-700">
                  Select Date:
                </label>
                <input
                  type="date"
                  id="dateInput"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm cursor-pointer"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="numUnits" className="block text-sm font-semibold text-gray-700">
                  Number of Units:
                </label>
                <input
                  type="text"
                  id="numUnits"
                  value={numUnits}
                  onChange={(e) => setNumUnits(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="numStoreys" className="block text-sm font-semibold text-gray-700">
                  Number of Storeys:
                </label>
                <input
                  type="text"
                  id="numStoreys"
                  value={numStoreys}
                  onChange={(e) => setNumStoreys(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="floorArea" className="block text-sm font-semibold text-gray-700">
                  Total Floor Area(sqm):
                </label>
                <input
                  type="text"
                  id="floorArea"
                  value={floorArea}
                  onChange={(e) => setFloorArea(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="lotArea" className="block text-sm font-semibold text-gray-700">
                  Lot Area(sqm):
                </label>
                <input
                  type="text"
                  id="lotArea"
                  value={lotArea}
                  onChange={(e) => setLotArea(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="estimatedCost" className="block text-sm font-semibold text-gray-700">
                  Total Estimated Cost:
                </label>
                <input
                  type="text"
                  id="estimatedCost"
                  value={estimatedCost}
                  onChange={(e) => setEstimatedCost(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  required
                />
              </div>
            </div>
          </div>
          <div className="w-full px-2 mb-4 border-2 border-gray-300 bg-white rounded-md md:ml-2">
            <div className="mb-4">
              <label htmlFor="buildingSelection" className="block text-sm font-semibold text-gray-700">
                Use or Character of Occupancy:
              </label>
              <p className='lg:text-sm text-xs'>Please select one character of occupancy.</p>
              <BuildingSelection onSelect={(building) => handleScopeChange(building)} />
            </div>
          </div>
          <div className="w-full px-2 mb-4 border-2 border-gray-300 bg-white rounded-md md:ml-2">
            <div className="mb-4">
              <label htmlFor="conManager" className="block mt-2 lg:text-sm text-xs font-semibold text-gray-700">
                CONTRACTING MANAGER (IF AVAILABLE)
              </label>
              <p>Authorized Managing Officer</p>
              <input
                type="text"
                id="conManager"
                value={conManager}
                onChange={(e) => setConManager(e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm"
                required
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
