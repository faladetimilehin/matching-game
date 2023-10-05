import React, { useState } from "react";
import "./App.css";
import Homepage from "./Homepage";
import ImageGrid from "./components/ImageGrid";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [flipped, setFlipped] = useState(false);

  const handleFlipped = () => {
    setFlipped(!flipped);
  };

  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Homepage />}></Route>
          <Route
            path="/image-grid"
            element={
              <section
                className="imagegrid-component-wrapper"
                onClick={handleFlipped}
              >
                <ImageGrid flipped={flipped} />
              </section>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
