package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Register;
import com.example.demo.repository.RegisterRepo;
import com.example.demo.dto.RegisterDto;



@Service
public  class RegisterServicelmpl implements RegisterService {

	@Autowired
    private RegisterRepo userRepo;
    @Override
	public String addUser(RegisterDto userdto) {
		Register user = new Register(
                userdto.getId(),
                userdto.getUserName(),
                userdto.getAddress(),
                userdto.getEmail(),
                userdto.getmPassword(),
                userdto.getcPassword()
                
        );
        userRepo.save(user);
        return user.getUserName();
	}

	@Override
	public List<Register> getUser() {
		return userRepo.findAll();
		
	}
	

}