import React from "react";
import logo from "./vc.jpg";
import {  Outlet, Link } from "react-router-dom";
export default function NavBar (props){
    return(
    <header>

<nav 
       className={props.darkMode ? "dark": ""}

       >
        <img  className="logo" src={logo}/>
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

       </nav>
       <Outlet />

    </header>
    )
}