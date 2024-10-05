import React, { useEffect,  useState } from 'react';
import { getAllAuta } from '../api/automobiliService';
import { useSkor } from '../servisi/skorServisi';
import { prikaziTopKorisnike } from '../api/korisnikService';
import TopModal from './TopModal';
import './MainPage.css'; 


const MainPage = ({ korisnik }) => {
  const [auta, setAuta] = useState([]);
  const [trenutniAutoIndex, setTrenutniAutoIndex] = useState(0);
  const [pogodak, setPogodak] = useState("");
  const [skor, setSkor] = useState(0);
  const [highSkor, setHighSkor] = useState(korisnik?.brojPogodjenihAuta);
  const [zavrsenaIgra, setZavrsenaIgra] = useState(false);
  const [topKorisnici, setTopKorisnici] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNetacan, setIsNetacan] = useState(false);

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
      setIsNetacan(true)
      setPogodak(""); 
    }
  };

  const handleTopKorisnici = async () => {

    try
    {
      const response = await prikaziTopKorisnike();
      setTopKorisnici(response.data);
      setIsModalOpen(true);

    }
    catch (error)
    {
      console.log(error);
    }


  }
 

  return (
    <div className="container-1">
      
      <button className="open-modal-button-1" onClick={handleTopKorisnici}>Prikazi Top korisnike</button>
      
      <TopModal topKorisnici={topKorisnici} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      <div className="scores-1">
        <h2 className="current-score-1">Tvoj trenutni skor je {skor}/{auta.length}</h2>
        <h2 className="high-score-1">Tvoj najveci skor je {highSkor}</h2>
      </div>
  
      {auta.length > 0 ? (
        <div className="game-container-1">
          {!zavrsenaIgra && (
            <>
              <img className="car-image-1" src={`./slike/${auta[trenutniAutoIndex].slikaUrl}`} alt={auta[trenutniAutoIndex].ime} />
              <input
                type="text"
                value={pogodak}
                onChange={(e) => {setPogodak(e.target.value) ; setIsNetacan(false)}}
                placeholder='Napisite model ovog auta'
                className={`guess-input-1 ${isNetacan ? 'error' : ''}`} 

              />
              <button className="check-button-1" onClick={handlePogodi}>Provjeri</button>
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



