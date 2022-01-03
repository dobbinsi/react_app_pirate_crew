import React, { useState, useEffect } from 'react';
import "./Navbar.css";
import { NavLink as Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from "axios";




const Navbar = () => {
    const [userId, setUserId] = useState("");
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const navigate = useNavigate();

    useEffect(() => {
        setUserId(localStorage.getItem("userId", userId));
        console.log(localStorage.getItem("userId"));
    }, [])

    const logout = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/users/logout",
            {
                withCredentials: true,
            },
        )
            .then((res) => {
                console.log(res.data);
                localStorage.removeItem("userId");
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <nav className="navbar">
                <Link to="/pirates/home" className="navbar-logo">
                    Pirate Crew
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/pirates/home' className='nav-links' onClick={closeMobileMenu}>
                            Crew Board
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/pirates/new' className='nav-links' onClick={closeMobileMenu}>
                            Add Pirate
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to={`/user/profile/${userId}`} className='nav-links' onClick={closeMobileMenu}>
                            My Profile
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/" className='nav-links' onClick={logout}>
                            Log Out
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;

