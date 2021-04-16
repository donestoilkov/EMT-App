package vdedejski.finki.lab02.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import vdedejski.finki.lab02.model.enumerations.Category;

import javax.persistence.*;
import javax.validation.constraints.Min;

@Data
@Entity
@NoArgsConstructor
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Enumerated(value = EnumType.STRING)
    private Category category;

    @ManyToOne
    private Author author;

    @Min(value = 0L, message = "The value must be positive")
    private Integer availableCopies;

    public Book(String name, Category category, Author author, Integer availableCopies) {
        this.name = name;
        this.category = category;
        this.author = author;
        this.availableCopies = availableCopies;
    }
}
