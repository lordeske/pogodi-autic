package com.PogodiAuto.Modeli;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Getter
@Setter
@AllArgsConstructor
@Data
public class Automobil {

    @Id
    private String id;
    private String ime;
    private String slikaUrl;
    private String model;
    private int godina;
    private String opis;






}
