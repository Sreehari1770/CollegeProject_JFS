package com.example.demo.repository;

import java.util.List;

// ProductRepository.java

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Product;

public interface ProductRepo extends JpaRepository<Product, Long> {
	List<Product> findByType(String type);
	Product findByName(String name);
}


