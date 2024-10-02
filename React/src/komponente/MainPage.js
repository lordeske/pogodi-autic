import React, { useEffect, useState } from 'react';
import { getAllAuta } from '../api/automobiliService';

const MainPage = ({ korisnik }) => {
  const [auta, setAuta] = useState([]); 
  const [trenutniAutoIndex, setTrenutniAutoIndex] = useState(0);
  const [pogodak, setPogodak] = useState(""); // trenutni unos korisnika
  const [skor, setSkor] = useState(0); // trenutni skor korisnika

  useEffect(() => {
    const fetchAuta = async () => {
      try {
        const response = await getAllAuta();
        setAuta(response.data); 
      } catch (error) {
        console.error("Greska pri dobijanju auta", error);
      }
    };

    fetchAuta();
  }, []); 

  const handlePogodi = () => {
    if (auta.length > 0 && pogodak.toLocaleLowerCase() === auta[trenutniAutoIndex].model.toLocaleLowerCase()) {
      setSkor(skor + 1);
      setTrenutniAutoIndex(trenutniAutoIndex + 1);
      setPogodak("");
    } else {
      alert("Nije tacno probaj ponovo");
    }
  };

  return (
    <div>
      <h1>Zdravo, {korisnik.imeKorisnika}</h1>
      <h2>Tvoj email je: {korisnik.email}</h2>
      <h2>Tvoj trenutni skor je {skor}</h2>
      
      {auta.length > 0 ? (
        <div>
          <h2>Trenutni auto je {auta[trenutniAutoIndex].model}</h2>
          {/* <img src={auta[trenutniAutoIndex].slikaUrl} alt={auta[trenutniAutoIndex].model} /> */}
          <input
            type="text"
            value={pogodak}
            onChange={(e) => setPogodak(e.target.value)}
            placeholder='Napisite model ovog auta'
          />
          <button onClick={handlePogodi}>Provjeri</button>
        </div>
      ) : (
        <p>Učitavanje auta...</p>
      )}
    </div>
  );
};

export default MainPage;
