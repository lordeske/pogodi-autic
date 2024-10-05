import React from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { useKorisnik } from '../servisi/kServisi';

const Login = ({ imeKorisnika, setImeKorisnika, email, setEmail, setKorisnik }) => {
  const { kreiraj } = useKorisnik();
  const navigate = useNavigate(); 

  const kreirajKorisnikaFunc = async (e) => {
    e.preventDefault();

    const korisnik = {
      imeKorisnika: imeKorisnika,
      email: email,
      brojPogodjenihAuta: 0
    }

    try {
      await kreiraj(korisnik);
      setKorisnik(korisnik)
      setImeKorisnika("");
      setEmail("");
      navigate('/guess');  
    } catch (error) {
      console.error("Greška prilikom kreiranja korisnika:", error);
    }
  }

  return (
    <div className="container">
      <div className="login-container">
        <div className="circle circle-one"></div>
        <div className="form-container">
          <h1 className="opacity">Pogodi auto</h1>
          <form onSubmit={kreirajKorisnikaFunc}>
            <input
              type="text"
              placeholder="Vase Korisnicko ime:"
              id="name"
              value={imeKorisnika}
              onChange={(e) => setImeKorisnika(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email:"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="opacity" type="submit">Kreiraj profil</button>
          </form>
        </div>
        <div className="circle circle-two"></div>
      </div>
      <div className="theme-btn-container"></div>
    </div>
  );
}

export default Login;
