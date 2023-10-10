package com.exittest.backend.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;
import com.exittest.backend.entites.Product;

@Component
public interface ProductDao extends CrudRepository<Product, Integer> {

    // These both are Custom finder Methods
    List<Product> findByNameContaining(String name); 

    List<Product> findByBrandContaining(String brand);

}
