import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import React,{useState} from 'react';
import Alert from './components/Alert'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#0d1f44'
      document.body.style.color='white'
      showAlert("Dark Mode has been enabled","Success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white'
      document.body.style.color='black'
      showAlert("Light Mode has been enabled","Success");
    }
  }
  const showAlert=(message,type)=>{
    setAlert({
        msg: message,
        type: type
      })
      const mytimeout=setTimeout(() => {
        setAlert(null);
      }, 2000)
  }

  return (
    <>
     {/* <Router> */}
     <Navbar mode={mode} toggleMode={toggleMode}/>
     {/* <Routes>
          <Route path="/about" element={<About/>} />
          <Route path="/" element={<TextForm heading='Enter the text to analyze' mode={mode} showAlert={showAlert}/>} />
          <Route path="/home" element={<TextForm heading='Enter the text to analyze' mode={mode} showAlert={showAlert}/>} />
        </Routes> */}
     <Alert alert={alert}/>
     <TextForm heading='Enter the text to analyze' mode={mode} showAlert={showAlert}/>
     {/* </Router> */}
     </>
  
  );
}

export default App;
