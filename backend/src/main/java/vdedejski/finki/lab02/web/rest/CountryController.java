package vdedejski.finki.lab02.web.rest;

import org.springframework.web.bind.annotation.*;
import vdedejski.finki.lab02.model.Country;
import vdedejski.finki.lab02.service.CountryService;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/countries")
public class CountryController {

    private final CountryService countryService;

    public CountryController(CountryService countryService) {
        this.countryService = countryService;
    }

    @GetMapping
    public List<Country> getAll(){
        return countryService.findAll();
    }

    @GetMapping("/search/{name}")
    public Country findByName(@PathVariable String name){
        return countryService.findByName(name);
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable Long id){
        countryService.deleteById(id);
    }
}
