import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

import "./sass/main.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
    </div>
  );
}

export default App;
