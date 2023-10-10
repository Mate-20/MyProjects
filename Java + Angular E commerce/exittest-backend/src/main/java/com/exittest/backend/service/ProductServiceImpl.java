package com.exittest.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.exittest.backend.dao.ProductDao;
import com.exittest.backend.entites.Product;

@Component
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductDao productDao;

    @Override
    public List<Product> getProducts() {
        List<Product> list = (List<Product>)productDao.findAll();
        return list;
    }

    @Override
    public Product getById(int id) {
        Optional<Product> opt = productDao.findById(id);
        Product prod = opt.get();
        return prod;
    }   


    
}
