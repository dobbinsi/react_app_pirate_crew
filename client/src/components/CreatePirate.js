import React, { useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";

const CreatePirate = (props) => {
    const [errors, setErrors] = useState({});
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [treasures, setTreasures] = useState("");
    const [phrase, setPhrase] = useState("");
    const [position, setPosition] = useState("");
    const [pegLeg, setPegLeg] = useState(true);
    const [eyePatch, setEyePatch] = useState(true);
    const [hookHand, setHookHand] = useState(true);
    const createSubmitHandler = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8000/api/pirates`,
            {
                name,
                image,
                treasures,
                phrase,
                position,
                pegLeg,
                eyePatch,
                hookHand
            }, {withCredentials: true},)
            .then((res) => {
                console.log(res.data);
                navigate("/pirates/home");
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.errors);
            })
    }

    return (
        <div>
            <div class="header">
                <h1>Add Pirate</h1>
                <button class="main-buttons"><Link to={"/pirates/home"}>Crew Board</Link></button>
            </div>
            <form onSubmit={createSubmitHandler}>
                <div>
                    <label class="form-control">Pirate Name:</label>
                    <input onChange={(e) => setName(e.target.value)} type="text" name="name" value={name} />
                    {
                        errors.name ?
                            <span>{errors.name.message}</span>
                            : null
                    }
                </div>
                <div>
                    <label class="form-control">Image URL:</label>
                    <input onChange={(e) => setImage(e.target.value)} type="text" name="image" value={image} />
                    {
                        errors.image ?
                            <span>{errors.image.message}</span>
                            : null
                    }
                </div>
                <div>
                    <label class="form-control"># of Treasure Chests:</label>
                    <input onChange={(e) => setTreasures(e.target.value)} type="number" name="treasures" value={treasures} />
                    {
                        errors.treasures ?
                            <span>{errors.treasures.message}</span>
                            : null
                    }
                </div>
                <div>
                    <label class="form-control">Pirate Catch Phrase:</label>
                    <input onChange={(e) => setPhrase(e.target.value)} type="text" name="phrase" value={phrase} />
                    {
                        errors.phrase ?
                            <span>{errors.phrase.message}</span>
                            : null
                    }
                </div>
                <div>
                    <label class="form-control">Crew Position:</label>
                    <select value={position} onChange={(e) => setPosition(e.target.value)} name="position">
                        <option value="none" defaultValue hidden>Select a Role:</option>
                        <option value="Captain">Captain</option>
                        <option value="First Mate">First Mate</option>
                        <option value="Quarter Master">Quarter Master</option>
                        <option value="Boatswain">Boatswain</option>
                        <option value="Powder Monkey">Powder Monkey</option>
                    </select>
                    {
                        errors.position ?
                            <span>{errors.position.message}</span>
                            : null
                    }
                </div>
                <div>
                    <label class="form-control" htmlFor="pegLeg">Peg Leg</label>
                    <input checked={pegLeg} onChange={(e) => setPegLeg(e.target.checked)} name="pegLeg" type="checkbox" />
                    {
                        errors.pegLeg ?
                            <span>{errors.pegLeg.message}</span>
                            : null
                    }
                </div>
                <div>
                    <label class="form-control" htmlFor="eyePatch">Eye Patch</label>
                    <input checked={eyePatch} onChange={(e) => setEyePatch(e.target.checked)} name="eyePatch" type="checkbox" />
                    {
                        errors.eyePatch ?
                            <span>{errors.eyePatch.message}</span>
                            : null
                    }
                </div>
                <div>
                    <label class="form-control" htmlFor="hookHand">Hook Hand</label>
                    <input checked={hookHand} onChange={(e) => setHookHand(e.target.checked)} name="hookHand" type="checkbox" />
                    {
                        errors.hookHand ?
                            <span>{errors.hookHand.message}</span>
                            : null
                    }
                </div>
                <div class="create">
                    <button class="create-button">Add Pirate!</button>
                </div>
            </form>
        </div>
    )
}

export default CreatePirate;