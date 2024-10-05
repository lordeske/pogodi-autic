import axios from "axios";



const API_URL = "http://localhost:8080/automobili"


export async function dodajAutomobil(automobil) {
    

    return await axios.post(API_URL,automobil);


}


export async function getAllAuta() {
    

    return await axios.get(API_URL);


}


