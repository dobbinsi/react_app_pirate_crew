import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "@reach/router";

const DisplayOne = (props) => {
    const { id } = props;
    const [pirate, setPirate] = useState({});
    useEffect(() => {
        axios.get(`http://localhost:8000/api/pirates/${id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setPirate(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <div class="header">
                <h1>{pirate.name}</h1>
                <button class="main-buttons"><Link to={"/pirates/home"}>Crew Board</Link></button>
            </div>
            <div class="body">
                <div class="content">
                    <div>
                        <img src={pirate.image} alt="pirate image" style={{ width: "300px", height: "300px" }} />
                        <h1>"{pirate.phrase}"</h1>
                    </div>
                    <div class="about">
                        <h1>About</h1>
                        <p>Position: {pirate.position}</p>
                        <p>Treasures: {pirate.treasures}</p>
                        {
                            pirate.pegLeg === true?
                            <p>Peg Leg: Yes</p>
                            : <p>Peg Leg: No</p>
                        }
                        {
                            pirate.eyePatch === true?
                            <p>Eye Patch: Yes</p>
                            : <p>Eye Patch: No</p>
                        }
                        {
                            pirate.hookHand === true?
                            <p>Hook Hand: Yes</p>
                            : <p>Hook Hand: No</p>
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DisplayOne;