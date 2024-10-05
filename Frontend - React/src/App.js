import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';  
import Login from './komponente/Login';
import MainPage from './komponente/MainPage';  

function App() {

  const [imeKorisnika, setImeKorisnika] = useState("");
  const [email, setEmail] = useState("");
  const [korisnik, setKorisnik] = useState(null);
  
  
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />  
          <Route path="/login" element={
            <Login 
              imeKorisnika={imeKorisnika}
              setImeKorisnika={setImeKorisnika}
              email={email}
              setEmail={setEmail}
              setKorisnik={setKorisnik}
            />} 
          />
          <Route path="/guess" element={<MainPage  korisnik={korisnik}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
