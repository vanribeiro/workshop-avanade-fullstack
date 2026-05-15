package com.workshop.fullstack.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.workshop.fullstack.models.Item;
import com.workshop.fullstack.services.ItemService;

@RestController
@RequestMapping("/api/items")
public class ItemController {
    @Autowired
    private ItemService service;

    @GetMapping
    public List<Item> listAll() {
        return service.listAllItems();
    }

    @PostMapping
    public Item saveItem(@RequestBody Item registry) {
        return service.saveItems(registry);
    }
}
