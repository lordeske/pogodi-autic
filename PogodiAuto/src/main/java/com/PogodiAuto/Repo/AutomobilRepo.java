package com.PogodiAuto.Repo;

import com.PogodiAuto.Modeli.Automobil;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface AutomobilRepo extends MongoRepository<Automobil, Long> {
}
