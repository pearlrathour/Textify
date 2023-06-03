import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  //whether dark mode enabled or not

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }

  const cancelAlert = () => {
    setAlert(null);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#15202B';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
      <div className="container my-3">
      <Navbar title="Textify" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} cancelAlert={cancelAlert} />
      <TextForm heading="Enter the text to analyze" mode={mode} />
      {/* <Router>
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<TextForm show heading="Enter the text to analyze" mode={mode} />} />
        </Routes>
      </Router> */}
      </div>
    </>
  );
}

export default App;
