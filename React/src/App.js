import './App.css';

import React, { useState } from 'react'

import { useKorisnik } from './servisi/kServisi';
import Login from './komponente/Login';



function App() {

  
  const [imeKorisnika, setImeKorisnika] = useState("");
  const [email, setEmail] = useState("")
  const {kreiraj} = useKorisnik();
  
  
  const kreirajKorisnikaFunc = async (e) =>
  {

    e.preventDefault();

      const korisnik = {

        imeKorisnika : imeKorisnika,
        email : email

      }

      await kreiraj(korisnik)
      setImeKorisnika("");
      setEmail("");
      
      



     


  }








  return (
    <div className="App">
      <Login 
        imeKorisnika={imeKorisnika}
        setImeKorisnika={setImeKorisnika}
        email={email}
        setEmail={setEmail}
        kreirajKorisnikaFunc={kreirajKorisnikaFunc}
      />
    </div>
  );
}

export default App;
