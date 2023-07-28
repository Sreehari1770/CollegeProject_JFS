package com.ats.security.service;

import java.util.List;

import com.ats.security.entity.Register;
import com.ats.security.entity.RegisterDto;

public interface RegisterService {

	String addUser(com.ats.security.entity.RegisterDto userdto);

	List<Register> getUser();

	
}