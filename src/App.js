import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Nav from "./Nav";
import Results from "./Results";
import requests from "./request";

function App() {
  const [selectedOption, setselectedOption] = useState(requests.fetchTrending);
  return (
    <div className="app">
      <Header />
      {/* there is a modifier pass in nav option */}
      <Nav setselectedOption={setselectedOption} />
      <Results selectedOption={selectedOption} />
    </div>
  );
}

export default App;
