package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.User;
import com.example.demo.service.UserService;



@RestController
@CrossOrigin("*")
public class controller {
	@Autowired
	
	UserService s;
	
	@PostMapping("/addUser")
	public boolean addUser(@RequestBody User user)
	{
	return s.addUser(user);
	}
	@GetMapping("/getUser")
	public List <User> getAllUser()
	{
	return s.getAllUser();
	}
	@GetMapping("/{id}")
	public User getUserById(@PathVariable int id)
	{
	return s.getUserById(id);
	}

}