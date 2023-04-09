import React from "react";
import Registration from '../components/Registration';

export default function LogoutPage (props){
    


    
    return(
        <div className="logOutPage">
       {/* <p>Log in again or Register</p> */}
       <div className="custom">
       {props.loggedOut&&<h2>You've logged out!</h2>}
       {props.loggedIn&&<h2>You've logged in!</h2>}

       
       <div className="registeration-componenet">
       <Registration />

       </div>


       </div>
       </div>
    )
}