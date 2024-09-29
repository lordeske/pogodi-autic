package com.PogodiAuto.Kontroler;


import com.PogodiAuto.Modeli.Automobil;
import com.PogodiAuto.Servis.AutomobilServis;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/automobili")
public class AutomobilKontroler {


    @Autowired
    private AutomobilServis automobilServis;

    @GetMapping
    public List<Automobil> getAllAuta()
    {

        return automobilServis.prikaziSvaAuta();


    }

    @PostMapping
    public Automobil dodajAuto(@RequestBody Automobil automobil)
    {
        return automobilServis.dodajAuto(automobil);

    }





}
