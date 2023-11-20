import React, { useState } from 'react';
import Banner from './components/Banner';
import Buttons from './components/Buttons';
import Table from './components/Table';
import satData from './components/satData';

function App() {
  // Declare Variables
  const [satellites, setSatellites] = useState([]);
  const displaySats = [...new Set(satData.map((data) => data.orbitType))];

  // Function to get unique values of the orbitType property
  const getUniqueOrbitTypes = () => {
    return [...new Set(satellites.map(data => data.orbitType))];
  }

  // Function to filter satellites by orbit type
  const filterSatelliteByOrbit = (orbitType) => {
    const newSatelliteData = satellites.filter(satellite => satellite.orbitType === orbitType);
    setSatellites(newSatelliteData);
  };

  return (
    <div>
      <Banner />
      <div>
        {displaySats.map(orbitType => (
          <button key={orbitType} onClick={() => filterSatelliteByOrbit(orbitType)}>
            {orbitType}
          </button>
        ))}
      </div>
      <Buttons orbitTypes={getUniqueOrbitTypes()} filterSatellites={filterSatelliteByOrbit} />
      <Table satellites={satellites} />
    </div>
  );
}

export default App;
