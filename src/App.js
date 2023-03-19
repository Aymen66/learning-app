import React from 'react';
import './App.css';
import Home from './Home';
import NavBar from './NavBar';
import { HashRouter , Routes, Route } from "react-router-dom";
import About from './About';
import Contact from './Contact';
import List from './List';
import useToken from './components/useToken';
// import Registration from './components/Registration';
import Login from './components/Login';





function getForm(){
  const storeValues = localStorage.getItem("storedData")
  if(!storeValues)return []
  return JSON.parse(storeValues)
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
  const [loginPage, setLoginPage]=React.useState(false)

  // const [token, setToken] = React.useState();

  // const token = getToken();
  const { token, setToken } = useToken();
  
  // if(!token) {
  //   return <Login setToken={setToken} />
  // }

  const styles ={
    display: show? "block" : "none"

}
setTimeout(() => setLoginPage(true), 3000);

  function toggleDarkMode(){
setDarkMode(function(prev){
  if(!prev){
    return true
  }else{
    return false
  }
})
  }

  
  return (
  <main className={darkMode ? "dark" : ""}>
    <div  className='container'>
      {/* <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} /> */}
      {/* <Main darkMode={darkMode}/> */}
       <HashRouter >
      <Routes>
        <Route  path="/" element={<NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}>
        <Route index element={<Home darkMode={darkMode} storedData={storedData}  randomWord={randomWord} formData={formData} show={show} setFormData={setFormData} setRandomWord={setRandomWord} setStoredData={setStoredData} setShow={setShow}/>}  />

          <Route path="About" element={<About />} />

          <Route path="Contact" element={<Contact />} />
          <Route path="List" element={<List storedData={storedData}  randomWord={randomWord} formData={formData} show={show} setFormData={setFormData} setRandomWord={setRandomWord}  setStoredData={setStoredData} setShow={setShow} styles={styles}/>} />

        </Route>
      </Routes>
    </HashRouter>
    
    {loginPage?(!token)&&
    <Login setToken={setToken}/> : null}
    </div>

  </main>
  );
}

export default App;
