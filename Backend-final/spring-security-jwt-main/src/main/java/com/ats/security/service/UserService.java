package com.ats.security.service;

import com.ats.security.entity.User;
import com.ats.security.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserById(int id) {
        return userRepository.findById(id).orElse(null);
    }

    public User createUser(User user) {
        return userRepository.save(user);
    }

    public User updateUser(int id, User user) {
        User existingUser = userRepository.findById(id).orElse(null);
        if (existingUser != null) {
            // Update the user properties as needed
            existingUser.setName(user.getName());
//            existingUser.setLastName(user.getLastName());
            // Set other properties as needed

            return userRepository.save(existingUser);
        }
        return null;
    }

    public void deleteUser(int id) {
        userRepository.deleteById(id);
    }
}

