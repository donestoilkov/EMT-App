package vdedejski.finki.lab02.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vdedejski.finki.lab02.model.Author;

import java.util.Optional;

@Repository
public interface AuthorRepository extends JpaRepository<Author, Long> {

    Optional<Author> findByNameAndSurname(String name, String surname);

}
