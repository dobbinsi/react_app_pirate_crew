import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";
import Login from "../components/Login";
import Register from "../components/Register";

const LogReg = (props) => {


    return(
        <div>
            <Login/>
            <Register/>
        </div>
    )
}

export default LogReg;

