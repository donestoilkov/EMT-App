package vdedejski.finki.lab02.service;

import vdedejski.finki.lab02.model.Country;

import java.util.List;

public interface CountryService {

    Country findByName(String name);

    List<Country> findAll();

    void deleteById(Long id);

}
