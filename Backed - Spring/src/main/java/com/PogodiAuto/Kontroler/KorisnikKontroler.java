package com.PogodiAuto.Kontroler;


import com.PogodiAuto.Modeli.Korisnik;
import com.PogodiAuto.Servis.KorisnikServis;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/korisnici")
public class KorisnikKontroler {



    @Autowired
    private KorisnikServis korisnikServis;


    @PutMapping("/{imeKorisnika}/skor/{skor}")
    public void azurirajSkor(
            @PathVariable String imeKorisnika,
            @PathVariable Integer skor

    )
    {

        korisnikServis.azurirajSkor(imeKorisnika, skor);

    }




    @GetMapping("/top")
    public List<Korisnik> prikaziTopKorisnike()
    {

        return korisnikServis.prikaziTopKorisnike(3);


    }


    @PostMapping
    public Korisnik dodajKorisnika(@RequestBody Korisnik korisnik)
    {
        return korisnikServis.kreirajKorisnika(korisnik);
    }

    @DeleteMapping("/obrisi/{imeKorisnika}")
    public void  obrisiKorisnika(@PathVariable String imeKorisnika)
    {
        korisnikServis.obrisiKorisnika(imeKorisnika);
    }




}
