import './App.css';
import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import React,{useState} from 'react';

function App() {
  const [mode,setMode]=useState('light');
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#0d1f44'
      document.body.style.color='white'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white'
      document.body.style.color='black'
    }
  }
  return (
    <>
     <Navbar mode={mode} toggleMode={toggleMode}/>
     <TextForm heading='Enter the text to analyze' mode={mode}/>
     {/* <About/> */}
     </>
  
  );
}

export default App;
