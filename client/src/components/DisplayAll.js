import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "@reach/router";

const DisplayAll = (props) => {
    const [pirateList, setPirateList] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/api/pirates")
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setPirateList(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    const deletePirate = (idFromBelow) => {
        axios.delete(`http://localhost:8000/api/pirates/${idFromBelow}`)
            .then((res) => {
                console.log(res.data);
                const newList = pirateList.filter((pirate, index) => pirate._id !== idFromBelow);
                setPirateList(newList);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div>
            <div class="header">
                <h1>Pirate Crew</h1>
                <button class="main-buttons"><Link to={"/pirates/new"}>Add Pirate</Link></button>
            </div>
            <div class="body">
                {
                    pirateList.map((pirate, index) => (
                        <div class="content" key={index}>
                            <div>
                                <img src={pirate.image} alt="pirate image" style={{ width: "150px", height: "150px" }}></img>
                            </div>
                            <div class="details">
                                <h2>{pirate.name}</h2>
                                <button class="main-buttons"><Link to={`/pirates/${pirate._id}`}>View Pirate</Link></button>
                                <button class="plank-button" onClick={(e) => deletePirate(pirate._id)}>Walk the Plank</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default DisplayAll;
