package vdedejski.finki.lab02.web.rest;

import org.springframework.web.bind.annotation.*;
import vdedejski.finki.lab02.model.Book;
import vdedejski.finki.lab02.model.dtos.BookDTO;
import vdedejski.finki.lab02.service.BookService;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/books")
public class BookController {

    private final BookService bookService;

    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @GetMapping
    public List<Book> findAll(){
        return bookService.findAll();
    }

    @GetMapping("/{id}")
    public Book findById(@PathVariable Long id){
        return bookService.findById(id);
    }

    @PostMapping("/add")
    public Book create(@RequestBody BookDTO bookDTO){
        return this.bookService.save(bookDTO);
    }

    @PostMapping("/edit")
    public Book update(@RequestBody BookDTO bookDTO){
        return this.bookService.update(bookDTO);
    }

    @PostMapping("/mark-taken/{id}")
    public void markAsTaken(@PathVariable Long id) throws Exception {
        bookService.markAsTakenById(id);
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable Long id){
        this.bookService.deleteById(id);
    }
}
