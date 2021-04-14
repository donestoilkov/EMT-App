package vdedejski.finki.lab02.web.rest;

import org.springframework.web.bind.annotation.*;
import vdedejski.finki.lab02.model.Author;
import vdedejski.finki.lab02.model.dtos.AuthorDTO;
import vdedejski.finki.lab02.service.AuthorService;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/authors")
public class AuthorController {

    private final AuthorService authorService;

    public AuthorController(AuthorService authorService) {
        this.authorService = authorService;
    }

    @GetMapping()
    public List<Author> getAll(){
        return authorService.findAll();
    }

    @GetMapping("/{id}")
    public Author findById(@PathVariable Long id){
        return authorService.findById(id);
    }

    @PostMapping("/add")
    public Author create(@RequestBody AuthorDTO authorDTO){
        return authorService.save(authorDTO);
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable Long id){
        authorService.deleteById(id);
    }
}
