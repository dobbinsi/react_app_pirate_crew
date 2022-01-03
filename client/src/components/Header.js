// import React, {useState, useEffect} from "react";
// import {Nav, NavLink, Bars, NavMenu, Times} from "./HeaderElements";
// import logo from "../images/pirate-hat-vector-art.png";

// const Header = () => {
//     const [userId, setUserId] = useState("");
//     useEffect(() => {
//         setUserId(localStorage.getItem("userId", userId));
//         console.log(localStorage.getItem("userId"));
//     }, [])

//     const [click, setClick] = useState(false);

//     const handleClick = () => setClick(!click);

//     return (
//         <Nav>
//             <NavLink to="/pirates/home">
//                 <img src={logo} className="hat-logo" alt="hat"/>
//             </NavLink>
//             <Bars  onClick={handleClick} className={click? {Times} : {Bars}} />
//                 <i className={click? {Times} : {Bars}}/>
//             <NavMenu>
//                 <NavLink to="/pirates/home" activeStyle>
//                     Crew Board
//                 </NavLink>
//                 <NavLink to="/pirates/new" activeStyle>
//                     Add Pirate
//                 </NavLink>
//                 <NavLink to={`/user/profile/${userId}`} activeStyle>
//                     Profile
//                 </NavLink>
//             </NavMenu>
//         </Nav>
//     );
// };

// export default Header;


