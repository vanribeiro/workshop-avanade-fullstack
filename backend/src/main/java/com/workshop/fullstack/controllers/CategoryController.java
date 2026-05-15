package com.workshop.fullstack.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.workshop.fullstack.models.Category;
import com.workshop.fullstack.services.CategoryService;

@RestController
@RequestMapping("/api/categories")
public class CategoryController {

    @Autowired
    private CategoryService service;

    @GetMapping
    public List<Category> listAll() {
        return service.listAllCategories();
    }

    @PostMapping
    public Category saveCategory(@RequestBody Category registry) {
        return service.saveCategory(registry);
    }
}