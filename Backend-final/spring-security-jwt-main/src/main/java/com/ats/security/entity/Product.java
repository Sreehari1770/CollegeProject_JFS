package com.ats.security.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

//Product.java



@Entity
public class Product {

 @Id
 @GeneratedValue(strategy = GenerationType.IDENTITY)
 private Long id;
 private String name;
 private double price;
 private String image;
 private String description;
 private String type;
public String getType() {
	return type;
}
public void setType(String type) {
	this.type = type;
}
public Long getId() {
	return id;
}
public void setId(Long id) {
	this.id = id;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public double getPrice() {
	return price;
}
public void setPrice(double price) {
	this.price = price;
}
public String getImage() {
	return image;
}
public void setImage(String image) {
	this.image = image;
}
public String getDescription() {
	return description;
}
public void setDescription(String description) {
	this.description = description;
}
public Product(Long id, String name, double price, String image, String description, String type) {
	super();
	this.id=id;
	this.name = name;
	this.price = price;
	this.image = image;
	this.description = description;
	this.type = type;
}
public Product() {
	
}
 
}

