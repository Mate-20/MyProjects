package com.exittest.backend.entites;

import java.io.Serializable;
import java.util.Arrays;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Builder;

@Entity
@Builder
public class Product implements Serializable{
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String name;

    private String brand;

    private String price;

    private String details;

    private String[] princodes;

    @Column(name = "image_path", length = 1000)
    private String imagePath;
        
    public Product() {
    }
    public Product(int id, String name, String brand, String price, String details, String[] princodes,
            String imagePath) {
        this.id = id;
        this.name = name;
        this.brand = brand;
        this.price = price;
        this.details = details;
        this.princodes = princodes;
        this.imagePath = imagePath;
    }

    public int getId() {
        return id;
    }
    public String getImagePath() {
        return imagePath;
    }
    public void setImagePath(String imagePath) {
        this.imagePath = imagePath;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getBrand() {
        return brand;
    }
    public void setBrand(String brand) {
        this.brand = brand;
    }
    public String getPrice() {
        return price;
    }
    public void setPrice(String price) {
        this.price = price;
    }
    public String getDetails() {
        return details;
    }
    
    public void setDetails(String details) {
        this.details = details;
    }
    public String[] getPrincodes() {
        return princodes;
    }
    public void setPrincodes(String[] princodes) {
        this.princodes = princodes;
    }

    @Override
    public String toString() {
        return "Product [id=" + id + ", name=" + name + ", brand=" + brand + ", price=" + price + ", details=" + details
                + ", princodes=" + Arrays.toString(princodes) + ", imagePath=" + imagePath + "]";
    }

    
}
