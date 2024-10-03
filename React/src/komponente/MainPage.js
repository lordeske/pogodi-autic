import React, { useEffect,  useState } from 'react';
import { getAllAuta } from '../api/automobiliService';
import { useSkor } from '../servisi/skorServisi';

const MainPage = ({ korisnik }) => {
  const [auta, setAuta] = useState([]);
  const [trenutniAutoIndex, setTrenutniAutoIndex] = useState(0);
  const [pogodak, setPogodak] = useState("");
  const [skor, setSkor] = useState(0);
  const [highSkor, setHighSkor] = useState(korisnik?.brojPogodjenihAuta);
  const [zavrsenaIgra, setZavrsenaIgra] = useState(false);
  
  const { azurirajSkor1 } = useSkor();

  




  useEffect(() => {
    const fetchAuta = async () => {
      try {
        const response = await getAllAuta();
        const izmjesanNizAuta = response.data.sort(() => Math.random() - 0.5);
        setAuta(izmjesanNizAuta);
      } catch (error) {
        console.error("Greska pri dobijanju auta", error);
      }
    };

    fetchAuta();
  }, []);

  useEffect(() => {
    if (skor > highSkor) {
      setHighSkor(skor);
      azurirajSkor1(korisnik.imeKorisnika, skor).catch(error => console.log(error));
    }
  }, [skor]);

  const handlePogodi = async () => {
    if (auta.length > 0 && pogodak.toLowerCase() === auta[trenutniAutoIndex].ime.toLowerCase()) {
      const noviSkor = skor + 1;
      setSkor(noviSkor);
      setPogodak("");

      if (trenutniAutoIndex + 1 < auta.length) {
        setTrenutniAutoIndex(trenutniAutoIndex + 1);
      } else {
        
      
        setZavrsenaIgra(true)
      }
    } else {
      alert("Nije tačno, probaj ponovo.");
      setPogodak(""); 
    }
  };

 

  return (
    <div>
      <h1>Zdravo, {korisnik.imeKorisnika}</h1>
      <h2>Tvoj email je: {korisnik.email}</h2>
      <h2>Tvoj trenutni skor je {skor}/{auta.length}</h2>
      <h2>Tvoj najveci skor je {highSkor}</h2>
  
      {auta.length > 0 ? (
        <div>
          {!zavrsenaIgra && (
            <>
              <h2>Trenutni auto je {auta[trenutniAutoIndex].ime}</h2>
              <input
                type="text"
                value={pogodak}
                onChange={(e) => setPogodak(e.target.value)}
                placeholder='Napisite model ovog auta'
                
              />
              <button onClick={handlePogodi}>Provjeri</button>
            </>
          )}


          {zavrsenaIgra && <p>Bravo, majstore! Prekucao si!</p>}
        </div>
      ) : (
        <p>Učitavanje auta...</p>
      )}
    </div>
  );
  
};

export default MainPage;



