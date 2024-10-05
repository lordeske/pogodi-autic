package com.PogodiAuto.Servis;

import com.PogodiAuto.Modeli.Automobil;
import com.PogodiAuto.Repo.AutomobilRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AutomobilServis {


    @Autowired
    private AutomobilRepo automobilRepo;



    public List<Automobil> prikaziSvaAuta()
    {
        return automobilRepo.findAll();

    }

    public Automobil dodajAuto(Automobil automobil)
    {

       return automobilRepo.save(automobil);

    }





}
