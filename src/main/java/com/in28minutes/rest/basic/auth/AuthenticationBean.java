package com.in28minutes.rest.basic.auth;

public class AuthenticationBean {

	private String message;
	
	public void setMessage(String message) {
		this.message = message;
	}

	public String getMessage() {
		return message;
	}

	public AuthenticationBean(String message) {
		// TODO Auto-generated constructor stub
		this.message = message;
	}

	@Override
	public String toString() {
		return String.format("HelloworldBean [message=%s]", message);
	}

}
