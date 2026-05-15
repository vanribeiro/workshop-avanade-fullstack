package com.workshop.fullstack.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.workshop.fullstack.models.Category;
import com.workshop.fullstack.repositories.CategoryRepository;

@Service
public class CategoryService {
    
    @Autowired
    private CategoryRepository repository;
    
    public List<Category> listAllCategories() {
        return repository.findAll();
    }

    public Category saveCategory (Category registry) {
        registry.setCategoryName(registry.getCategoryName());
        return repository.save(registry);
    }
    
}
