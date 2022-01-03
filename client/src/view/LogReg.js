import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
import Register from "../components/Register";

const LogReg = (props) => {


    return(
        <div>
            <Navbar/>
            <Login/>
            <Register/>
        </div>
    )
}

export default LogReg;

