// import logo from './logo.svg';

import './App.css';
import About from './components/About';
import Navbar from './components/Navbar.js';
import Textform from './components/Textform.js';
// import Alert from './components/Alert.js';
import React,{ useState } from 'react';




function App() {
  const [Mode, setMode]=useState('light'); // Tells whether dark mode is enable or not.
  // const [alert,setAlert]=useState(null);

  // const showAlert=(message,type)=>{
  //   setAlert({
  //     msg:message,
  //     type:type
  //   })
  // }

  const toggleMode=()=>{
    if (Mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor='white';
      // showAlert("Dark mode has been enabled", "success")
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor='#3c3636';
      // showAlert("Light mode has been enabled", "success")
    }
  }
  return (
 <>
<Navbar title="TextUtilss" Mode={Mode} toggleMode={toggleMode}/>
{/* <Alert alert={alert}/> */}

<div className="container">
<Textform heading="Enter the text below" Mode={Mode}/>
<About/>
</div>

 </>
  );
}

export default App;
