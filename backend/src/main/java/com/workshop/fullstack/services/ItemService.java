package com.workshop.fullstack.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.workshop.fullstack.models.Category;
import com.workshop.fullstack.models.Item;
import com.workshop.fullstack.repositories.CategoryRepository;
import com.workshop.fullstack.repositories.ItemRepository;

@Service
public class ItemService {
    
    @Autowired
    private ItemRepository repository;

    @Autowired
    private CategoryRepository categoryRepository;

    public List<Item> listAllItems () {
        return repository.findAll();
    }

    public Item saveItems (Item registry) {
        Long catId = registry.getCategoryId();
        if (catId == null && registry.getCategory() != null) {
            catId = registry.getCategory().getCategoryId();
        }
        
        final Long finalCatId = catId;

        if (finalCatId != null) {
            Category category = categoryRepository.findById(finalCatId)
                .orElseThrow(() -> new RuntimeException("Category not found with id: " + finalCatId));
            registry.setCategory(category);
        }
        return repository.save(registry);
    }
}
