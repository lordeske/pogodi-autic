package com.PogodiAuto.Servis;


import com.PogodiAuto.Modeli.Korisnik;
import com.PogodiAuto.Repo.KorisnikRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

@Service
public class KorisnikServis {

    @Autowired
    private KorisnikRepo korisnikRepo;
    @Autowired
    private MongoTemplate mongoTemplate;

    public Korisnik kreirajKorisnika(Korisnik korisnik)
    {

        return korisnikRepo.save(korisnik);

    }


    public void obrisiKorisnika(String imeKorisnika) {
        Optional<Korisnik> korisnikOptional = korisnikRepo.findByImeKorisnika(imeKorisnika);
        if (korisnikOptional.isPresent()) {
            korisnikRepo.delete(korisnikOptional.get());
        }

    }

    public void azurirajSkor(String imeKorisnika, Integer skor)
    {

        Optional<Korisnik> korisnikOptional = korisnikRepo.findByImeKorisnika(imeKorisnika);

        if(korisnikOptional.isPresent())
        {
            Korisnik korisnik = korisnikOptional.get();
            korisnik.setBrojPogodjenihAuta(skor);
            korisnikRepo.save(korisnik);

        }
    }


    public List<Korisnik> prikaziTopKorisnike (Integer brojTopKorisnika)
    {

        Query query = new Query().with(Sort.by(Sort.Direction.DESC, "brojPogodjenihAuta")).limit(brojTopKorisnika);
        return mongoTemplate.find(query, Korisnik.class);


    }


}
