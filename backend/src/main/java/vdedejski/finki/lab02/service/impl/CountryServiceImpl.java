package vdedejski.finki.lab02.service.impl;

import org.springframework.stereotype.Service;
import vdedejski.finki.lab02.model.Country;
import vdedejski.finki.lab02.repository.CountryRepository;
import vdedejski.finki.lab02.service.CountryService;

import java.util.List;

@Service
public class CountryServiceImpl implements CountryService {

    public CountryServiceImpl(CountryRepository countryRepository) {
        this.countryRepository = countryRepository;
    }

    private final CountryRepository countryRepository;


    @Override
    public Country findByName(String name) {
        return this.countryRepository.findByName(name).orElseThrow();
    }

    @Override
    public List<Country> findAll() {
        return this.countryRepository.findAll();
    }

    @Override
    public void deleteById(Long id) {
        this.countryRepository.deleteById(id);
    }
}
