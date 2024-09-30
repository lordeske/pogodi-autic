import React from 'react';
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
    <div>
      <h2>Login Form</h2>
      <form onSubmit={kreirajKorisnikaFunc}>
        <label htmlFor="name">Vase Korisnicko ime:</label><br />
        <input
          type="text"
          id="name"
          value={imeKorisnika}
          onChange={(e) => setImeKorisnika(e.target.value)}
        /><br /><br />

        <label htmlFor="email">Email:</label><br />
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br /><br />

        <button type="submit">Kreiraj profil</button>
      </form>
    </div>
  );
}

export default Login;
