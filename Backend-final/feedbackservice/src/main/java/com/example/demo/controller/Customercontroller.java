package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.CustomerSupport;
import com.example.demo.service.CustomerService;

@RestController
@CrossOrigin
public class Customercontroller {

	@Autowired
	CustomerService cservice;
	
	@PostMapping("/addsupport")
	public void addSupport(@RequestBody CustomerSupport e) {
		cservice.addSupport(e);
	}
}
