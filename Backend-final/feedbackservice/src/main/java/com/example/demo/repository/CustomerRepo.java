package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.CustomerSupport;

public interface CustomerRepo extends JpaRepository<CustomerSupport, Integer>{

}
