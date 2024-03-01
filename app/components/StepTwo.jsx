import React, { useState } from 'react';

const StepTwo = () => {
  // States for each input field
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [extensionName, setExtensionName] = useState('');
  const [province, setProvince] = useState('');
  const [cityMunicipality, setCityMunicipality] = useState('');
  const [barangay, setBarangay] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [street, setStreet] = useState('');
  const [houseNo, setHouseNo] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [tin, setTin] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [placeIssued, setPlaceIssued] = useState('');
  const [governmentId, setGovernmentId] = useState('');
  const [lotOwnerName, setLotOwnerName] = useState('');
  const [lotAddress, setLotAddress] = useState('');
  const [lotOwnerIdentification, setLotOwnerIdentification] = useState('');



  // Handlers for input field changes
  // Add more handlers as needed for each input field

  return (
    <div className="container mx-auto px-4 py-4">
      <div className="flex flex-wrap -mx-2">
        {/* Left Column */}
        <div className="w-full md:w-1/2 px-2 mb-4">
          {/* Applicant's Full Name */}
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Last Name: 
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="middleName" className="block text-sm font-medium text-gray-700">
              Middle Name:
            </label>
            <input
              type="text"
              id="middleName"
              value={middleName}
              onChange={(e) => setMiddleName(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="extensionName" className="block text-sm font-medium text-gray-700">
              Extension Name:
            </label>
            <input
              type="text"
              id="extensionName"
              value={extensionName}
              onChange={(e) => setExtensionName(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              required
            />
          </div>

          {/* Applicant's Address */}
          <div className="mb-4">
            <label htmlFor="province" className="block text-sm font-medium text-gray-700">
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
            <label htmlFor="city/municipality" className="block text-sm font-medium text-gray-700">
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
            <label htmlFor="barangay" className="block text-sm font-medium text-gray-700">
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

           {/* Address Fields */}
      <div className="mb-4 grid grid-cols-3 gap-4">
        {/* Zip Code */}
        <div>
          <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
            Zip Code
          </label>
          <input
            type="text"
            id="zipCode"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            className="mt-1 block w-full rounded-md border border-green-500 shadow-sm"
            required
          />
        </div>

        {/* Street */}
        <div className="col-span-1">
          <label htmlFor="street" className="block text-sm font-medium text-gray-700">
            Street
          </label>
          <input
            type="text"
            id="street"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            className="mt-1 block w-full rounded-md border border-green-500 shadow-sm"
            required
          />
        </div>

        {/* House No. */}
        <div>
          <label htmlFor="houseNo" className="block text-sm font-medium text-gray-700">
            House No.
          </label>
          <input
            type="text"
            id="houseNo"
            value={houseNo}
            onChange={(e) => setHouseNo(e.target.value)}
            className="mt-1 block w-full rounded-md border border-green-500 shadow-sm"
            required
          />
        </div>
      </div>

          {/* Applicant's Contact Information */}
          <div className="mb-4 grid grid-cols-2 gap-4">
      {/* Contact Number */}
      <div>
        <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">
          Contact No.
        </label>
        <input
          type="text"
          id="contactNumber"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          placeholder="Enter contact number"
        />
      </div>
      
      {/* Email Address */}
      <div>
        <label htmlFor="emailAddress" className="block text-sm font-medium text-gray-700">
          Email Address *
        </label>
        <input
          type="email"
          id="emailAddress"
          value={emailAddress}
          onChange={(e) => setEmailAddress(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          placeholder="Enter email address"
          required
        />
      </div>
    </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/2 px-2 mb-4">
          {/* Applicant's Identification */}
          <div className="mb-4">
            <label htmlFor="tin" className="block text-sm font-medium text-gray-700">
              TIN:
            </label>
            <input
              type="text"
              id="tin"
              value={tin}
              onChange={(e) => setTin(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="GovernmentId" className="block text-sm font-medium text-gray-700">
              Government Issued ID No: 
            </label>
            <input
              type="text"
              id="governmentId"
              value={governmentId}
              onChange={(e) => setGovernmentId(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              required
            />
          </div>
          <div className="flex gap-4">
      {/* Date input */}
      <div>
        <label htmlFor="dateInput" className="block text-sm font-medium text-gray-700">
          Select Date
        </label>
        <input
          type="date"
          id="dateInput"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm cursor-pointer"
        />
      </div>
      
      {/* Place Issued */}
      <div className="flex-1">
        <label htmlFor="placeIssued" className="block text-sm font-medium text-gray-700">
          Place Issued *
        </label>
        <input
          type="text"
          id="placeIssued"
          value={placeIssued}
          onChange={(e) => setPlaceIssued(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          placeholder="Enter place issued"
          required
        />
        <p className="text-xs text-gray-500 mt-1">Note: Type "N/A" if place of issuance is unknown.</p>
      </div>
    </div>

          {/* Lot Owner's Fullname */}
          <div className="mb-4">
            <label htmlFor="lotOwnerName" className="block text-sm font-medium text-gray-700">
              Lot Owner's Fullname
            </label>
            <input
              type="text"
              id="lotOwnerName"
              value={lotOwnerName}
              onChange={(e) => setLotOwnerName(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lotAddress" className="block text-sm font-medium text-gray-700">
              Lot Address:
            </label>
            <input
              type="text"
              id="lotAddress"
              value={lotAddress}
              onChange={(e) => setLotAddress(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lotOwnerIdentification" className="block text-sm font-medium text-gray-700">
              Lot Owner's Identification:
            </label>
            <input
              type="text"
              id="lotOwnerIdentification"
              value={lotOwnerIdentification}
              onChange={(e) => setLotOwnerIdentification(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>
          <div className="flex gap-4">
      {/* Date input */}
      <div>
        <label htmlFor="dateInput" className="block text-sm font-medium text-gray-700">
          Select Date
        </label>
        <input
          type="date"
          id="dateInput"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm cursor-pointer"
        />
      </div>
      
      {/* Place Issued */}
      <div className="flex-1">
        <label htmlFor="placeIssued" className="block text-sm font-medium text-gray-700">
          Place Issued *
        </label>
        <input
          type="text"
          id="placeIssued"
          value={placeIssued}
          onChange={(e) => setPlaceIssued(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          placeholder="Enter place issued"
          required
        />
        <p className="text-xs text-gray-500 mt-1">Note: Type "N/A" if place of issuance is unknown.</p>
      </div>
    </div>
          
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
