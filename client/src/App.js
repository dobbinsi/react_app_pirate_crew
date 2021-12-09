import React from 'react';
import './App.css';
import { Router } from "@reach/router";
import DisplayAll from "./components/DisplayAll";
import CreatePirate from "./components/CreatePirate";
import DisplayOne from "./components/DisplayOne";
import LogReg from './view/LogReg';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div className="wrapper">
      <Router>
        <LogReg path="/" />
        <DisplayAll path="/pirates/home" />
        <CreatePirate path="/pirates/new" />
        <UserProfile path="/user/profile/:id" />
        <DisplayOne path="/pirates/:id" />
      </Router>
    </div>
  );
}

export default App;
