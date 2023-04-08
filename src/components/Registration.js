import React, { useState } from 'react'
import {  Alert } from 'react-bootstrap';
import Login from '../components/Login';


function Registration(props) {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);
  const [Agreed, setAgreed] = useState(false);




    // on form submit...
    function handleFormSubmit(e) {
        e.preventDefault();

        if (!name || !password || !Agreed) {
            setFlag(true);

        } else {
            setFlag(false);
            localStorage.setItem("hardikSubmissionName", JSON.stringify(name));
            localStorage.setItem("hardikSubmissionPassword", JSON.stringify(password));
            localStorage.setItem("Agreed", JSON.stringify(Agreed));



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

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setAgreed(prevAgreed => {
            return {
                ...prevAgreed,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    return (
        <>
           
            <div > {login ? <form className="login-wrapper" onSubmit={handleFormSubmit}>
                <h1>Register</h1>

                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Enter Full Name" name="name" onChange={(event) => setName(event.target.value)} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={(event) => setPassword(event.target.value)} />
                </div>
                <div 
               className='checkboxDiv' 
               >
                <input
               type="checkbox"
               checked={Agreed}
               onChange={handleChange}
               name="Agreed"
               required
               className='checkbox' 
           />
           <label htmlFor="Agreed"> The data will be saved in your browser storage.Do you agree?</label>
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
            </div>
        </>
    )
}

export default Registration