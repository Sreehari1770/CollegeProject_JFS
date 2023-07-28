package com.ats.security.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "register")
public class Register {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	 @Column(name="user_id", length = 45)
	private int id;
	 @Column(name="user_name", length = 60)
	private String userName;
	 @Column(name="user_address", length = 100)
	private String address;
	 @Column(name="user_email", length = 25)
	private String email;
	 @Column(name="user_password", length = 20)
	private String mPassword;
	 @Column(name="user_confirmpassword", length = 20)
	private String cPassword;
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
	public void setcPassword(String cPassword) {
		this.cPassword = cPassword;
	}
	public Register(int id, String userName, String address, String email, String mPassword, String cPassword) {
		super();
		this.id = id;
		this.userName = userName;
		this.address = address;
		this.email = email;
		this.mPassword = mPassword;
		this.cPassword = cPassword;
	}
	
	public Register() {
		
		
	}
}