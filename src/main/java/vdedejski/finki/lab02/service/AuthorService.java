package vdedejski.finki.lab02.service;

import vdedejski.finki.lab02.model.Author;
import vdedejski.finki.lab02.model.dtos.AuthorDTO;

import java.util.List;

public interface AuthorService {

    Author findById(Long id);

    List<Author> findAll();

    Author save(AuthorDTO authorDTO);

    void deleteById(Long id);

}
