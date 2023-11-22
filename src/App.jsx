
import Buttons from "./components/Buttons";
import Table from "./components/Table";
import React, { useState } from "react";
import satData from "./components/satData";
import Banner from "./components/Banner";

function App() {
  const [sat, setSat] = useState(satData);
  const displaySats = [...new Set(satData.map((data) => data.orbitType))];
  const filterByType = (currentType) => {
    const filteredSats = satData.filter((newSatDisplay) => {
      return newSatDisplay.orbitType === currentType;
    });
    setSat(filteredSats);
  };

  return (
    <>
      <Banner />
      <Buttons
        filterByType={filterByType}
        setSat={setSat}
        displaySats={displaySats}
      />
      <Table sat={sat} />
    </>
  );
}
export default App;
 // import React, { useState } from 'react';
// import Buttons from './components/Buttons';
// import Table from './components/Table';
// import satData from './components/satData';
// import Banner from "./components/Banner";

// function App() {
//   const [sat, setSat] = useState(satData);
//   const displaySats = [...new Set(satData.map((data) => data.orbitType))];
//   const filterByType = (currentType) => {
//     const filteredSats = satData.filter((newSatDisplay) => {
//       return newSatDisplay.orbitType === currentType;
//     });
//     setSat(filteredSats);
//   };
//   return (
//     <div>
//       <Banner />
//       <Buttons
//         filterByType={filterByType}
//         setSat={setSat}
//         displaySats={displaySats}
//       />
//       <Table sat={sat} />
//       <button onClick={showAllSatellites}>All Orbits</button>
//     </div>
//   );
// }

// export default App;