import { kreirajKorisnika } from '../api/automobiliService';

export const useKorisnik = () => {
  const kreiraj = async (korisnik) => {
    try {
      await kreirajKorisnika(korisnik);
      console.log(`Kreiran korisnik ${korisnik}`);
    } catch (error) {
      console.log("Greška prilikom kreiranja korisnika:", error);
    }
  };

  return { kreiraj }; 
};
