
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
import {
  BrowserRouter, 
  Route, 
  Routes,
} from "react-router-dom";


function App() {

  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const showAlert = (message,type) => {
  setalert(
    {msg : message,
     type: type
    }
  )
  setTimeout(()=>{
      setalert(null);
  },2000);
  }
  const toggleMode = () => {
    if(mode === "light"){
      setmode("dark");
      document.body.style.backgroundColor = "#05010e";
      showAlert("Dark Mode has been enabled!","success");
    }
    else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled!","success");

    }
  }



  return (
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 38bdaee (Initial commit)
    <>
     <BrowserRouter>

    <Navbar title="TextUtils" aboutName="About" mode={mode} toggleMode={toggleMode} />
     <Alert alert={alert}/>
     
     <Routes>
            <Route path="/about" element={<About  mode={mode}/>} />
            <Route path="/" element={<TextForm heading="Enter The Text to Analyze" mode={mode} showAlert = {showAlert}/>
} />
          </Routes>

          </BrowserRouter>


    </>
    

<<<<<<< HEAD
=======
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with devansh
        </a>
      </header>
    </div>
>>>>>>> f9b1878 (h)
=======
>>>>>>> 38bdaee (Initial commit)
  );
}

export default App;
