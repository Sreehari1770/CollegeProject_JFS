package com.ats.security.dto.request;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RegisterRequest {
	@Id
	@GeneratedValue
	private int Id;
	private String Name;
	private String email;
	private String password;
	private String address; 
}
