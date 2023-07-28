package com.ats.security.service;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ats.security.entity.Product;
import com.ats.security.repository.ProductRepo;

import java.util.List;

@Service
public class ProductService {

 private final ProductRepo productRepository;

 @Autowired
 public ProductService(ProductRepo productRepository) {
     this.productRepository = productRepository;
 }

 public List<Product> getAllProducts() {
     return productRepository.findAll();
 }
 public List<Product> getProductsByType(String type) {
     return productRepository.findByType(type);
 }
 
 public Product saveProduct(Product product) {
     return productRepository.save(product);
 }

 public Product updateProductByName(String name, Product product) {
     Product existingProduct = productRepository.findByName(name);
     if (existingProduct != null) {
         product.setId(existingProduct.getId());
         return productRepository.save(product);
     } else {
         return null; // Product not found
     }
 }

 public boolean deleteProductByName(String name) {
     Product existingProduct = productRepository.findByName(name);
     if (existingProduct != null) {
         productRepository.delete(existingProduct);
         return true;
     } else {
         return false; // Product not found
     }
 }

}


