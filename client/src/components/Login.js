import React, { useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";
// import {GlobalContext} from '../context/MyContext';

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    // const { userId, setUserId } = useContext(GlobalContext);
    const login = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8000/api/users/login",
            {
                email: email,
                password: password,
            },
            {
                withCredentials: true,
            },
        )
            .then((res) => {
                localStorage.setItem("userId", res.data.userId);
                navigate("/pirates/home");
            })
            .catch((err) => {
                console.log(err.response.data);
                setErrorMessage(err.response.data.message);
            });
    };

    return (
        <div>
            <h1>Login</h1>
            <span>{errorMessage ? errorMessage : ""}</span>
            <form onSubmit={login}>
                <div>
                    <label class="form-control">Email:</label>
                    <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label class="form-control">Password:</label>
                    <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div class="form-control">
                    <button class="main-buttons" type="submit">Sign In!</button>
                </div>
            </form>
        </div>
    )
}

export default Login;
