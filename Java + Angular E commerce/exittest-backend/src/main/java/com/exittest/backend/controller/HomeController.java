package com.exittest.backend.controller;

import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.exittest.backend.dao.AuthDao;
import com.exittest.backend.dao.ProductDao;
import com.exittest.backend.entites.Auth;
import com.exittest.backend.entites.Product;
import com.exittest.backend.service.AuthServiceImpl;
import com.exittest.backend.service.ProductServiceImpl;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class HomeController {

    @Autowired
    private AuthServiceImpl authServiceImpl;
    @Autowired
    private AuthDao authDao;
    @Autowired
    private ProductServiceImpl productServiceImpl;
    @Autowired
    private ProductDao productDao;

    @GetMapping("/login") // This will return the list of users to the angular app, and there we will
                          // authorise
    public List<Auth> login() {
        List<Auth> list = authServiceImpl.getDetails();
        return list;
    }  

    @PostMapping("/register") // Registring the user by taking all the values from Angular Form
    public ResponseEntity<String> register(@RequestBody Auth auth) {
        String email = auth.getEmail();
        String name = auth.getName();
        Auth checkingMail = authDao.findByEmail(email);
        Auth checkingName = authDao.findByName(name);

        // If mail already exists in database, we are sending a response code
        if(checkingMail != null){
            // response code 401
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Email Already Exists");
        }
        // If username already exists in database, we are sending a response code
        else if(checkingName != null){
            // response code 409
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Username Already exsits");
        }else{
            authServiceImpl.setDetails(auth);
            return ResponseEntity.ok("Details set successfully");
        }
    }

    @GetMapping("/product/name/{name}") // Searching for products with the name
    public List<Product> getProductsByName(@PathVariable String name){
        List<Product> list = productDao.findByNameContaining(name);
        return list;
    }

    @GetMapping("/product/brand/{brand}") // Searching for products by there brand
    public List<Product> getProductsByBrand(@PathVariable String brand){
        List<Product> list = productDao.findByBrandContaining(brand);
        return list;
    }

    @GetMapping("/product") // Getting the list of all Products
    public List<Product> getProducts(){
        List<Product> list = productServiceImpl.getProducts();
        return list;
    }

    @GetMapping("/product/{id}") // Searching product by there id 
    public Product geProductById(@PathVariable int id){
        return productServiceImpl.getById(id);
    }
}
