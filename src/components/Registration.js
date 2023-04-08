import React, { useState } from 'react'
import {  Alert } from 'react-bootstrap';
import Login from '../components/Login';


function Registration(props) {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);
    const [info, setInfo] = useState(true);




    // on form submit...
    function handleFormSubmit(e) {
        e.preventDefault();

        if (!name || !password ) {
            setFlag(true);

        } else {
            setFlag(false);
            localStorage.setItem("hardikSubmissionName", JSON.stringify(name));
            localStorage.setItem("hardikSubmissionPassword", JSON.stringify(password));
            // localStorage.setItem("info", JSON.stringify(info));


            setLogin(!login)
            // setInfo(!info)


        }

    }

    // Directly to the login page
    function handleClick() {
        setLogin(!login)
    }

    // Company Info
    // function infoClick() {
    //     setInfo(!info)
    // }



    return (
        <>
           
            {info ? <div > {login ? <form className="login-wrapper" onSubmit={handleFormSubmit}>
                <h3>Register</h3>

                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Enter Full Name" name="name" onChange={(event) => setName(event.target.value)} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={(event) => setPassword(event.target.value)} />
                </div>


                <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                <p className="forgot-password text-right">
                    Already registered <a href={Login} onClick={handleClick} >log in?</a>
                </p>
                {flag &&
                    <Alert color='primary' variant="danger" >
                        I got it you are in hurry! But every Field is important!
                </Alert>
                }

            </form> : <Login />}
            </div> : <div>
                   
                </div>}
        </>
    )
}

export default Registration