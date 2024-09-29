package com.PogodiAuto.Repo;

import com.PogodiAuto.Modeli.Korisnik;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface KorisnikRepo extends MongoRepository<Korisnik, Long> {
    Optional<Korisnik> findByImeKorisnika(String imeKorisnika);


}
