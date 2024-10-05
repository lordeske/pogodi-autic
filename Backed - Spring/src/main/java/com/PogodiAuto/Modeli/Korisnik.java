package com.PogodiAuto.Modeli;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Getter
@Setter
@AllArgsConstructor
public class Korisnik {


    @Id
    private String idKorisnika;
    private String imeKorisnika;
    private String email;

    private Integer brojPogodjenihAuta;




}
