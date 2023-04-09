import React from 'react';
import './App.css';
import Home from './Home';
import NavBar from './NavBar';
import { HashRouter , Routes, Route } from "react-router-dom";
import About from './About';
import Contact from './Contact';
import List from './List';
// import useToken from './components/useToken';
import Registration from './components/Registration';
// import Login from './components/Login';
import LogoutPage from "./components/LogoutPage";

// import LogOutBtn from "./components/logOutBtn";




function getForm(){
  const storeValues = localStorage.getItem("storedData")
  if(!storeValues)return []
  return JSON.parse(storeValues)
}

function getRegister(){
  const storeRegister = localStorage.getItem("registerPage")
  if(!storeRegister)return []
  return JSON.parse(storeRegister)
}
function App() {
  const [darkMode, setDarkMode]=React.useState(true)

  const [randomWord, setRandomWord]= React.useState({word:"", meaning: ""})
  const [show, setShow]= React.useState(false)

  let [storedData, setStoredData]= React.useState(getForm);
  let [formData, setFormData]= React.useState(
      {
          writeWord: "",
          writeMeaning: ""
      }
  );
  
  const [registerPage, setRegisterPage]= React.useState(false)
  const [logOutPage, setLogOutPage]= React.useState(false)
  const [islogOutBtn, setIsLogOutBtn]= React.useState(getRegister)
  const [loggedIn, setLoggedIn]= React.useState(false)
  const [loggedOut, setLoggedOut]= React.useState(false)



  // const { token, setToken } = useToken();

  // const [loginPage, setLoginPage]=React.useState(false)

  // const [token, setToken] = React.useState();

  // const token = getToken();
  
  // if(!token) {
  //   return <Login setToken={setToken} />
  // }

  const styles ={
    display: show? "block" : "none"

}

  function toggleDarkMode(){
setDarkMode(function(prev){
  if(!prev){
    return true
  }else{
    return false
  }
})
  }
  React.useEffect(() => {

    if (localStorage.getItem("passwordRegister") === null) {
      setIsLogOutBtn(false)
      setTimeout(() => setRegisterPage(true), 3000);

    } else {
        setRegisterPage(false)
    // setLogOutPage(true)
    // setRegisterPage(false)
    setIsLogOutBtn(true)
    // setLoggedOut(!loggedOut)
    // setLogOutPage(!logOutPage)





    }
  }, [registerPage]);
  
  React.useEffect(() => {
      localStorage.setItem("islogOutBtn", JSON.stringify(islogOutBtn));
        }, [islogOutBtn]);
  return (
  <main className={darkMode ? "dark" : ""}>
    <div  className='container'>
      {/* <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} /> */}
      {/* <Main darkMode={darkMode}/> */}
       <HashRouter >
      <Routes>
        <Route  path="/" element={<NavBar loggedOut={loggedOut} setLoggedOut={setLoggedOut}loggedIn={loggedIn} logOutPage={logOutPage} setLogOutPage={setLogOutPage}   islogOutBtn={islogOutBtn} setIsLogOutBtn={setIsLogOutBtn} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}>
        <Route index element={<Home darkMode={darkMode} storedData={storedData}  randomWord={randomWord} formData={formData} show={show} setFormData={setFormData} setRandomWord={setRandomWord} setStoredData={setStoredData} setShow={setShow}/>}  />

          <Route path="About" element={<About />} />

          <Route path="Contact" element={<Contact />} />
          <Route path="List" element={<List storedData={storedData}  randomWord={randomWord} formData={formData} show={show} setFormData={setFormData} setRandomWord={setRandomWord}  setStoredData={setStoredData} setShow={setShow} styles={styles}/>} />

        </Route>
      </Routes>

    </HashRouter>
    
    {/* {loginPage?(!token)&&
    <Login setToken={setToken}/> : null} */}
      {registerPage? <Registration logOutPage={logOutPage} setLogOutPage={setLogOutPage} registerPage={registerPage} setRegisterPage={setRegisterPage}/> :""} 
     {logOutPage ?<LogoutPage loggedOut={loggedOut} setLoggedOut={setLoggedOut}loggedIn={loggedIn} setLoggedIn={setLoggedIn} />:""}

    </div>

  </main>
  );
}

export default App;
