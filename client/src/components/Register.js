import React, { useState } from "react";
import axios from "axios";
// import { navigate } from "@reach/router";

const Register = (props) => {
    const [confirmReg, setConfirmReg] = useState("");
    const [errors, setErrors] = useState({});
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };
    const register = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/users/register", user,
            {
                withCredentials: true,
            },
        )
            .then((res) => {
                console.log("res.data", res.data);
                setUser({
                    username: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                });
                setConfirmReg(
                    "Thank you for registering! You can now login."
                );
                setErrors({});
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.errors);
            });
    };

    return (
        <div>
            <h1>Register</h1>
            {confirmReg ? <h4 style={{ color: "blue" }}>{confirmReg}</h4> : null}
            <form onSubmit={register}>
                <div>
                    <label class="form-control">Username:</label>
                    <input type="text" name="username" value={user.username} onChange={handleChange}/>
                    {errors.username ? (
                        <span className="error-text">
                            {errors.username.message}
                        </span>
                    ) : null}
                </div>
                <div>
                    <label class="form-control">Email:</label>
                    <input type="email" name="email" value={user.email} onChange={handleChange}/>
                    {errors.email ? (
                        <span className="error-text">{errors.email.message}</span>
                    ) : null}
                </div>
                <div>
                    <label class="form-control">Password:</label>
                    <input type="password" name="password" value={user.password} onChange={handleChange}/>
                    {errors.password ? (
                        <span className="error-text">
                            {errors.password.message}
                        </span>
                    ) : null}
                </div>
                <div>
                    <label class="form-control">Confirm Password:</label>
                    <input type="password" name="confirmPassword" value={user.confirmPassword} onChange={handleChange}/>
                    {errors.confirmPassword ? (
                        <span className="error-text">
                            {errors.confirmPassword.message}
                        </span>
                    ) : null}
                </div>
                <div class="form-control">
                    <button class="main-buttons" type="submit">Register!</button>
                </div>
            </form>
        </div>
    )
}

export default Register;
