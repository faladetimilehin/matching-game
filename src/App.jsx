import "./App.css";
//import Game from "./components/Game";
import { useState } from "react";
import Cards from "./components/Cards";

function App() {
  //const [state, setState] = useState(0);
  return (
    <>
      <div className="App">
        <h1>FaceDuo</h1>
        <Cards />
      </div>
    </>
  );
}

export default App;
