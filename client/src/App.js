import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DisplayAll from "./components/DisplayAll";
import CreatePirate from "./components/CreatePirate";
import DisplayOne from "./components/DisplayOne";
import LogReg from './view/LogReg';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Routes>
          <Route exact path="/" element={<LogReg />}></Route>
          <Route exact path="/pirates/home" element={<DisplayAll />}></Route>
          <Route exact path="/pirates/new" element={<CreatePirate />}></Route>
          <Route exact path="/pirates/:id" element={<DisplayOne />}></Route>
          <Route exact path="/user/profile/:userId" element={<UserProfile />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
