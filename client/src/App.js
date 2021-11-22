import React from 'react';
import './App.css';
import { Router } from "@reach/router";
import DisplayAll from "./components/DisplayAll";
import CreatePirate from "./components/CreatePirate";
import DisplayOne from "./components/DisplayOne";

function App() {
  return (
    <div className="wrapper">
      <Router>
        <DisplayAll path="/" />
        <CreatePirate path="/pirates/new" />
        <DisplayOne path="/pirates/:id" />
      </Router>
    </div>
  );
}

export default App;
