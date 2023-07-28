package com.ats.security.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class RegisterDto {
	@Id
	private int id;
	private String userName;
	private String address;
	private String email;
	private String mPassword;
	private String cPassword;
	public RegisterDto(int id, String userName, String address, String email, String mPassword, String cPassword) {
		super();
		this.id = id;
		this.userName = userName;
		this.address = address;
		this.email = email;
		mPassword = mPassword;
		cPassword = cPassword;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getmPassword() {
		return mPassword;
	}
	public void setmPassword(String mPassword) {
		this.mPassword = mPassword;
	}
	public String getcPassword() {
		return cPassword;
	}
	public void setCpassword(String cPassword) {
		cPassword = cPassword;
	}
	public RegisterDto() {
		
	}
	
	

}