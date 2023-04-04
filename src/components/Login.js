// import React, { useState } from 'react';
// import PropTypes from 'prop-types';

// async function loginUser(credentials) {
//  return fetch('http://localhost:8080/login', {
//    method: 'POST',
//    headers: {
//      'Content-Type': 'application/json'
//    },
//    body: JSON.stringify(credentials)
//  })
//    .then(data => data.json())
// }

// export default function Login({ setToken }) {
//   const [username, setUserName] = useState();
//   const [password, setPassword] = useState();
//   const [Agreed, setAgreed] = useState(false);

  

//   const handleSubmit = async e => {
//     e.preventDefault();
//     const token = await loginUser({
//       username,
//       password
//     });
//     setToken(token);
//   }
//   function handleChange(event) {
//     const {name, value, type, checked} = event.target
//     setAgreed(prevAgreed => {
//         return {
//             ...prevAgreed,
//             [name]: type === "checkbox" ? checked : value
//         }
//     })
// }

//   return(
//     <div className="login-wrapper">
//       <h1>Register & Log In</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           <p>Username</p>
//           <input type="text" onChange={e => setUserName(e.target.value)}required />
//         </label>
//         <label>
//           <p>Password</p>
//           <input type="password" onChange={e => setPassword(e.target.value)} required/>
//         </label>
//         <br></br>
//         <input
//                type="checkbox"
//                checked={Agreed}
//                onChange={handleChange}
//                name="Agreed"
//                required
//            />
//            <label htmlFor="Agreed"> The data will be saved in your browser storage.Do you agree?</label>

//         <div className='btn-group'>
//           <button type="submit">Register</button>
//         </div>
//       </form>
//     </div>
//   )
// }

// Login.propTypes = {
//   setToken: PropTypes.func.isRequired
// };


import React, { useState, useEffect } from 'react'
import { Alert } from 'react-bootstrap';

function Login(props) {

    const [namelog, setNamelog] = useState(" ");
    const [passwordlog, setPasswordlog] = useState(" ");

    const [flag, setFlag] = useState(false);

    const [home, setHome] = useState(true);


    function handleLogin(e) {
        e.preventDefault();

        let pass = localStorage.getItem('hardikSubmissionPassword').replace(/"/g, "");
        let mail = localStorage.getItem('hardikSubmissionName').replace(/"/g, "");

        if (!namelog || !passwordlog) {
            setFlag(true);


            console.log("EMPTY");
        } else if ((passwordlog !== pass) || (namelog !== mail)) {
            setFlag(true);

        } else {
            setHome(!home);
            setFlag(false);
            // props.setRegisterPage(false)




        }

    }
    useEffect(() => {
      localStorage.setItem("registerPage", props.registerPage);
        }, [props.registerPage]);
        
     
    return (
        <div>
            {home ? <form className="login-wrapper" onSubmit={handleLogin}>
                <h3>LogIn</h3>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Enter name" onChange={(event) => setNamelog(event.target.value)} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={(event) => setPasswordlog(event.target.value)} />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Login</button>

                {flag && <Alert color='primary' variant="warning" >
                    Fill correct Info else keep trying.
                        </Alert>}
            </form> :null
            } </div>
    )
}

export default Login

