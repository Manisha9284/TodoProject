package com.in28minutes.rest.basic.auth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class BasicAuthenticationController {

	@GetMapping(path="/basicauth")
	public AuthenticationBean helloworldBean()
	{
		//throw new RuntimeException("Some Error has Happened! Contact Support ***");
		return new AuthenticationBean("You are Authenticated");
	}
	
	 
}
