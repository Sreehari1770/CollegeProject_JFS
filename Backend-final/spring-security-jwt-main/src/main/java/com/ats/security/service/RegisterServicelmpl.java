package com.ats.security.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ats.security.entity.Register;
import com.ats.security.entity.RegisterDto;
import com.ats.security.repository.RegisterRepo;




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