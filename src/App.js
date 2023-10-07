import './App.css';
import Navbar from './components/Navbar';
import TextBox from './components/TextBox';
import Alert from './components/Alert'
import React, {useState} from 'react';

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
    <Navbar mode={mode} toggleMode={toggle} heading="TextUtils App"/>
    <Alert alert={alert} />
    <TextBox mode={mode} showAlert={showAlert}/>
    </>
  );
}

export default App;
