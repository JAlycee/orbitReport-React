import React from 'react';
import satData from './satData';

function Buttons({ filterByType, setSat, displaySats }) {
  return (
    <div>
      <button onClick={() => setSat(satData)}>All Satellites</button>
      {displaySats.map((sat, id) => (
        <button onClick={() => filterByType(sat)} key={id}>
          {sat} Orbit
        </button>
      ))}
    </div>
  );
}

export default Buttons;
