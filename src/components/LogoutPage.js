import React from "react";
import Registration from '../components/Registration';

export default function LogoutPage (){
    



    
    return(
        <div className="logOutPage">
       {/* <p>Log in again or Register</p> */}
       <div className="custom">
       <h2>You've logged out</h2>
       <div className="registeration-componenet">
       <Registration />

       </div>


       </div>
       </div>
    )
}