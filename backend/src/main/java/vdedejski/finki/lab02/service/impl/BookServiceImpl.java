package vdedejski.finki.lab02.service.impl;

import org.springframework.stereotype.Service;
import vdedejski.finki.lab02.model.Author;
import vdedejski.finki.lab02.model.Book;
import vdedejski.finki.lab02.model.dtos.BookDTO;
import vdedejski.finki.lab02.model.enumerations.Category;
import vdedejski.finki.lab02.repository.AuthorRepository;
import vdedejski.finki.lab02.repository.BookRepository;
import vdedejski.finki.lab02.service.BookService;

import java.util.List;

@Service
public class BookServiceImpl implements BookService {

    private final BookRepository bookRepository;
    private final AuthorRepository authorRepository;

    public BookServiceImpl(BookRepository bookRepository, AuthorRepository authorRepository) {
        this.bookRepository = bookRepository;
        this.authorRepository = authorRepository;
    }

    @Override
    public Book findById(Long id) {
        return this.bookRepository.findById(id).orElseThrow();
    }

    @Override
    public Book findByName(String name) {
        return this.bookRepository.findByName(name).orElseThrow();
    }

    @Override
    public Book save(BookDTO bookDTO) {
        Category category = Category.values()[bookDTO.getCategoryId()];
        Author author = authorRepository.findById(bookDTO.getAuthorId()).orElseThrow();
        return bookRepository.save(new Book(bookDTO.getName(), category, author, bookDTO.getAvailableCopies()));
    }

    @Override
    public Book update(Long id, BookDTO bookDTO) {
        Book book = bookRepository.findById(id).orElseThrow();

        book.setAuthor(authorRepository.findById(id).orElseThrow());
        book.setCategory(Category.values()[bookDTO.getCategoryId()]);
        book.setAvailableCopies(bookDTO.getAvailableCopies());
        book.setName(bookDTO.getName());

        return bookRepository.save(book);

    }

    @Override
    public List<Book> findAll() {
        return this.bookRepository.findAll();
    }

    @Override
    public void markAsTakenById(Long id) throws Exception {
        Book book = bookRepository.findById(id).orElseThrow();
        if (book.getAvailableCopies() <= 0) {
            throw new Exception("This book cannot be taken");
        }
        book.setAvailableCopies(book.getAvailableCopies() - 1);
        bookRepository.save(book);
    }

    @Override
    public void deleteById(Long id) {
        this.bookRepository.deleteById(id);
    }
}
