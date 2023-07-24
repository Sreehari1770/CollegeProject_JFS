	package com.example.demo.controller;
	
	//ProductController.java
	
	import org.springframework.beans.factory.annotation.Autowired;
	import org.springframework.http.HttpStatus;
	import org.springframework.http.ResponseEntity;
	import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
	import org.springframework.web.bind.annotation.RequestMapping;
	import org.springframework.web.bind.annotation.RestController;
	
	import com.example.demo.entity.Product;
	import com.example.demo.service.ProductService;
	
	import java.util.List;
	
	@RestController
	@CrossOrigin
	@RequestMapping("/products")
	public class ProductController {
	
	 private final ProductService productService;
	
	 @Autowired
	 public ProductController(ProductService productService) {
	     this.productService = productService;
	 }
	
	 @GetMapping("/getproducts")
	 public ResponseEntity<List<Product>> getAllProducts() {
	     List<Product> products = productService.getAllProducts();
	     return new ResponseEntity<>(products, HttpStatus.OK);
	 }
	
	 @PostMapping("/addproducts")
	 public ResponseEntity<Product> saveProduct(@RequestBody Product product) {
	     Product savedProduct = productService.saveProduct(product);
	     return new ResponseEntity<>(savedProduct, HttpStatus.CREATED);
	 }
	 @GetMapping("/getproducts/{type}")
	    public ResponseEntity<List<Product>> getProductsByType(@PathVariable String type) {
	        List<Product> products = productService.getProductsByType(type);
	        return new ResponseEntity<>(products, HttpStatus.OK);
	    }
	 
	 @PutMapping("/updateproduct/{name}")
	    public ResponseEntity<Product> updateProductByName(@PathVariable String name, @RequestBody Product product) {
	        Product updatedProduct = productService.updateProductByName(name, product);
	        if (updatedProduct != null) {
	            return new ResponseEntity<>(updatedProduct, HttpStatus.OK);
	        } else {
	            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	        }
	    }

	    @DeleteMapping("/deleteproduct/{name}")
	    public ResponseEntity<Void> deleteProductByName(@PathVariable String name) {
	        boolean deleted = productService.deleteProductByName(name);
	        if (deleted) {
	            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	        } else {
	            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	        }
	    }
	}
	
	
