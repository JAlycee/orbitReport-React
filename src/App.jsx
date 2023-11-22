
import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner";
import { useState } from "react";
import satData from "./components/satData"


function App() {
  
  const [sat, setSat] = useState(satData);
  const displaySats = [...new Set(satData.map((data) => data.orbitType))]; // displaySats = [low, medium, high]

  const filterByType = (currentType) => {
    const displaySats = satData.filter((newSatDisplay) => {
       return newSatDisplay.orbitType === currentType;
    }); // displaySats = list of satellite objects whose orbitType is the same as given
    setSat(displaySats);
  };  // function returns list of satellite objects whose orbitType is the same as given


  //filterByType={filterByType} setSat={setSat} displaySats={displaySats} 
  //sat={sat}

  return (
    <div>
      <Banner />
      <Buttons filterByType={filterByType} setSat={setSat} displaySats={displaySats} />
      <Table sat={sat}/>
    </div>
  );
}

export default App;