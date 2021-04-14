package vdedejski.finki.lab02.service.impl;

import org.springframework.stereotype.Service;
import vdedejski.finki.lab02.model.Author;
import vdedejski.finki.lab02.model.Country;
import vdedejski.finki.lab02.model.dtos.AuthorDTO;
import vdedejski.finki.lab02.repository.AuthorRepository;
import vdedejski.finki.lab02.repository.CountryRepository;
import vdedejski.finki.lab02.service.AuthorService;


import java.util.List;

@Service
public class AuthorServiceImpl implements AuthorService {

    private final AuthorRepository authorRepository;
    private final CountryRepository countryRepository;

    public AuthorServiceImpl(AuthorRepository authorRepository, CountryRepository countryRepository) {
        this.authorRepository = authorRepository;
        this.countryRepository = countryRepository;
    }


    @Override
    public Author findById(Long id) {
        return this.authorRepository.findById(id).orElseThrow();
    }

    @Override
    public List<Author> findAll() {
        return this.authorRepository.findAll();
    }

    @Override
    public Author save(AuthorDTO authorDTO) {
        Country country = this.countryRepository.findByName(authorDTO.getCountry()).orElseThrow();
        return this.authorRepository.save(new Author(authorDTO.getName(), authorDTO.getSurname(), country));
    }

    @Override
    public void deleteById(Long id) {
        this.authorRepository.deleteById(id);
    }
}
