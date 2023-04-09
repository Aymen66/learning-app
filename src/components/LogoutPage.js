import React from "react";
import Registration from '../components/Registration';

export default function LogoutPage (props){
  const [logOutLog, setLogOutLog] = React.useState(true);
  const [loggedIn, setLoggedIn]= React.useState(false)
  const [off, setOff]= React.useState(true)

    
function closeHandle(){
    setLogOutLog(false)
    props.setLogged(false)
        // window.location.reload(false);
}

   function goBackHandle(){
    setLoggedIn(true)
    setOff(false)

    props.setLogged(false)
    
} 
    return(
      <div>
        
         {logOutLog&& <div className="logOutPage">
       {/* <p>Log in again or Register</p> */}
       <div className="custom">
       {props.loggedOut&&<h2>You've logged out!</h2>}
       {props.loggedIn&&<h2>You've logged in!</h2>}
    {off&&<button className="logOutPageBtn" onClick={closeHandle}>Close</button>}
    {off&&<button className="logOutPageBtn"onClick={goBackHandle}> Go back again</button>}


       <div className="custom"> 
       {loggedIn&&<Registration  />}

       </div>

       


       </div>
       </div>}
      </div>
    )
}