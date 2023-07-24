package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.User;
//import com.example.demo.entity.entity;

//import com.example.demo.project.entity.entity;

public interface UserRepo extends JpaRepository<User, Integer> {
	User findByUsername(String username);
}