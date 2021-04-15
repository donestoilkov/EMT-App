package vdedejski.finki.lab02.service.impl;

import lombok.NoArgsConstructor;
import org.springframework.stereotype.Service;
import vdedejski.finki.lab02.model.enumerations.Category;
import vdedejski.finki.lab02.service.CategoryService;

import java.util.ArrayList;
import java.util.List;

@Service
@NoArgsConstructor
public class CategoryServiceImpl implements CategoryService {

    @Override
    public List<Category> getAllCategories() {
        return List.of(Category.values());
    }
}
