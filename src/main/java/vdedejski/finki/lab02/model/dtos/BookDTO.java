package vdedejski.finki.lab02.model.dtos;

import lombok.Data;

@Data
public class BookDTO {
    private Long id;
    private String name;
    private int categoryId;
    private Long authorId;
    private Integer availableCopies;
}
