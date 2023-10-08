import './App.css';
import Navbar from './components/Navbar';
import TextBox from './components/TextBox';
import Alert from './components/Alert'
import React, {useState} from 'react';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message , type) =>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null,null);
    }, 2000);
  }
  const [mode, setMode] = useState("light");
  const toggle = () =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#000721';
      showAlert("Dark Mode Enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = '#ffffff';
      showAlert("Light Mode Enabled","success");
    }
  }
  return (
    <>
    <Router>
      <Navbar mode={mode} toggleMode={toggle} heading="TextUtils App"/>
      <Alert alert={alert} />
      
      <div className="container">
      <Routes >
          <Route path="/about" element={<About mode={mode}/>}>
          </Route>
          <Route path="/" element={<TextBox mode={mode} showAlert={showAlert}/>}>
          </Route>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
