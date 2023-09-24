import './App.css';
import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import React,{useState} from 'react';
import Alert from './components/Alert'

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
      setTimeout(() => {
        setAlert(null)
      }, 2000);
  }

  return (
    <>
     <Navbar mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert}/>
     <TextForm heading='Enter the text to analyze' mode={mode} showAlert={showAlert}/>
     {/* <About/> */}
     </>
  
  );
}

export default App;
