// components/BuildingSelection.js

import React, { useState } from 'react';

const BuildingSelection = ({ onSelect }) => {
  const buildingOptions = [
    { title: 'Group A: Residential (Dwellings)', type: 'title' },
    'Single',
    'Duplex',
    'Residential R-1R-2',
    'Others (A-1) Residential building/structure for exclusive use of single-family occupants',
    { title: 'Group B: Residential', type: 'title' },
    'Hotel',
    'Others (A-2) Residential building for the exclusive use of non-leasing occupants not exceeding 10 persons',
    'Dormitory',
    'Residential R-3. R-4, R-5',
    'Motel',
    'Townhouse',
    'Boarding House, Lodging house',
    'Others (B-1)',
    { title: 'Group E: Commercial', type: 'title' },
    'Bank',
    'Dringking/Dining Establishment',
    'Shop (ie. Dress shop, Tailoring, Barbershop, etc.)',
    'Store',
    'Others (E-1) Business and Mercantile, where no work is done except change of parts and maintenance requiring no open flames, welding, or use of highly flammable liquids',
    'Others (E-2) Business and Mercantile in nature',
    'Others (E-3) Business and Mercantile, where no repair work is done except exchange of parts and maintenance requiring no open flames, welding or use of highly flammable liquids',



    // Add more building options as needed
  ];

  const [selectedBuilding, setSelectedBuilding] = useState(null);

  const handleBuildingSelect = (building) => {
    if (building.type !== 'title') {
      setSelectedBuilding(building);
      onSelect(building); // Pass the selected building to the parent component if needed
      // You can perform any additional actions based on the selected building here
    }
  };

  return (
    <div className="max-h-40 overflow-y-auto border lg:text-sm text-xs border-gray-300 rounded-md p-2">
      {buildingOptions.map((building, index) => (
        <div key={index}>
          {building.type === 'title' ? (
            <div className="font-bold my-2 ">{building.title}</div>
          ) : (
            <button
              onClick={() => handleBuildingSelect(building)}
              className={`w-full py-2 text-left hover:bg-gray-100 ${selectedBuilding === building ? 'bg-gray-200' : ''}`}
            >
              {building}
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default BuildingSelection;
