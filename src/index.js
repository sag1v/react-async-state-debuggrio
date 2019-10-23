import React, { useState } from "react";
import ReactDOM from "react-dom";
import { PetsHooks as Pets } from "./Pets";

function App() {
  const [showPets, setShowPets] = useState(true);

  const toggle = () => {
    setShowPets(state => !state);
  };

  return (
    <div>
      <button onClick={toggle}>{showPets ? "hide" : "show"}</button>
      {showPets && <Pets />}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
