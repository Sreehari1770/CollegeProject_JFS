package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.Register;
import com.example.demo.dto.RegisterDto;

public interface RegisterService {

	String addUser(RegisterDto userdto);

	List<Register> getUser();

}