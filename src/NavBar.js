import React from "react";
import logo from "./vc.jpg";

import {  Outlet, Link } from "react-router-dom";
// import Login from "./components/Login";
// import LogOutBtn from "./components/logOutBtn";

// import LogoutPage from "./components/LogoutPage";

export default function NavBar (props){
    function handleLogout(){
        props.setLogOutPage(true)
        localStorage.removeItem("nameRegister");

        localStorage.removeItem("passwordRegister");
        localStorage.removeItem("Agreed");
        props.setLoggedOut(true)

    }
    return(
    <header>

<nav 
       className={props.darkMode ? "dark": ""}

       >
        <img alt="logo" className="logo" src={logo}/>
        <ul>
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/Contact">Contact</Link>
      <Link to="/List">My List</Link>
      
        {/* <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>My List</li> */}



       </ul>
       <div className="darkmode-logout-div">
       <div 
                className="toggler" 
            >
                <p className="toggler--light">Light</p>
                <div 
                    className="toggler--slider"
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>

            </div>
            {props.islogOutBtn? <button onClick={handleLogout} className="logOut">LogOut</button>
 : null }




       </div>
       
       </nav>
       
       <Outlet />

    </header>
    )
}