package vdedejski.finki.lab02.service;

import vdedejski.finki.lab02.model.Book;
import vdedejski.finki.lab02.model.dtos.BookDTO;

import java.util.List;

public interface BookService {

    Book findById(Long id);

    Book findByName(String name);

    Book save(BookDTO bookDTO);

    Book update(Long id, BookDTO bookDTO);

    List<Book> findAll();

    void markAsTakenById(Long id) throws Exception;

    void deleteById(Long id);
}
