package com.exittest.backend.service;

import java.util.List;

import com.exittest.backend.entites.Product;

public interface ProductService {
    public List<Product> getProducts();
    public Product getById(int id);
}
