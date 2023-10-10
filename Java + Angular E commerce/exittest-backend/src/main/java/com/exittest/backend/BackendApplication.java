package com.exittest.backend;

import java.util.List;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import com.exittest.backend.dao.AuthDao;
import com.exittest.backend.dao.ProductDao;
import com.exittest.backend.entites.Product;

@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {
		ApplicationContext context = SpringApplication.run(BackendApplication.class, args);
		AuthDao authDao = context.getBean(AuthDao.class);
		ProductDao pDao = context.getBean(ProductDao.class);

		// Optional<Auth> opt = authDao.findById(2);
		// Auth auth = opt.get();
		// auth.setEmail("adi@gmail.com");
		// authDao.save(auth);

		// Auth auth = authDao.findByEmail("adi@gmail.com");
		// System.out.println(auth);
		
		// PRODUCTS---------------------

		// Product prod1 = new Product();
		// prod1.setBrand("Britania");
		// prod1.setName("Choco Chip Cookies");
		// prod1.setPrice("40");
		// prod1.setDetails("Nice Cookies");
		String[] pincode = {"110083","110085"};
		// prod1.setPrincodes(pincode);
		// pDao.save(prod1);

		// Optional<Product> opt = pDao.findById(41);
		// Product prod = opt.get();
		// prod.setImagePath("https://www.verybestbaking.com/sites/g/files/jgfbjl166/files/gdn_product/field_product_images/tollhouse-qdadig8mouks9063hogf.png");
		// pDao.save(prod);

		List<Product> productList = (List<Product>)pDao.findAll();
		for (Product product : productList) {
    		System.out.println(product);
		}
	}
}
