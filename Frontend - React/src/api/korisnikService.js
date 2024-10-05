
import axios from "axios";


const API_URL = "http://localhost:8080/korisnici";



export async function kreirajKorisnika(korisnik)
{

    return await axios.post( API_URL, korisnik );


}


///Ovo necemo implementirati sluzi samo za probu, mozda drugi put dodamo admina da prati to i da dodaje auta
export async function obrisiKorisnika(imeKorisnika) 
{
    return await axios.delete(`${API_URL}/obrisi/${imeKorisnika}`);
}

export async function prikaziTopKorisnike() {
    

    return await axios.get(`${API_URL}/top`)

}

export async function azurirajSkor(imeKorisnika, skor) {
    

    return await axios.put(`${API_URL}/${imeKorisnika}/skor/${skor}`)

}

