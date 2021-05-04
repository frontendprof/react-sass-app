import React from "react";
import About from "./components/About";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

import "./sass/main.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <div style={{ backgroundColor:"green",height:"400px" }}></div>
      <div style={{ backgroundColor:"pink",height:"400px" }}></div>
      <div style={{ backgroundColor:"grey",height:"400px" }}></div>
    </div>
  );
}

export default App;
