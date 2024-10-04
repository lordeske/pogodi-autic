import React from 'react';
import './TopModal.css'; 

const TopModal = ({ isOpen, topKorisnici, onClose }) => {
    if (!isOpen) return null;

    return (
        <div>
            <div className="modal-overlay">
                <div className="modal-content">
                    <button className="close-button" onClick={onClose}>X</button>
                    <h2>Top Korisnici</h2>
                    <ul>
                        {topKorisnici.map((korisnik, index) => (
                            <li key={index}>{korisnik.imeKorisnika} : {korisnik.brojPogodjenihAuta}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default TopModal;
