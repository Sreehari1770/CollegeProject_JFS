package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.User;
//import com.example.demo.entity.entity;
import com.example.demo.repository.UserRepo;
//import com.example.demo.repository.repo;




@Service
public class UserService {
	
	@Autowired 
	UserRepo r;
	public boolean addUser(User user)

	{
	return r.save(user)!=null?true:false;
	}
	public List <User> getAllUser()
	{
	return r.findAll();
	}
	public User getUserById(int id)
	{
	return r.findById(id).get();
	}
}