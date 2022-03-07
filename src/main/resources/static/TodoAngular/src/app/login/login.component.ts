import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username='manisha';
  password='';
  errorMessage="invalid Credentials"
  invalidLogin=false
  constructor(private router:Router,
    private hardcodedAuthentication:HardcodedAuthenticationService,
    private basicAuthenticationService:BasicAuthenticationService) { }

  ngOnInit(): void {
  }

  handleLogin(){
    // console.log(this.username)
    //if(this.username==="manisha" && this.password==="dummy")
    if(this.hardcodedAuthentication.authenticate(this.username, this.password))
    {
      //Redirect to Welcome page
      this.router.navigate(['welcome',this.username])
      this.invalidLogin=false
    }
    else{
      this.invalidLogin=true
    }
  }

   handleBasicAuthLogin(){
    // console.log(this.username)
    //if(this.username==="manisha" && this.password==="dummy")
    this.basicAuthenticationService.executeAuthenticationService(this.username, this.password)
    .subscribe(
      data=>{
        console.log(data);
        this.router.navigate(['welcome', this.username])
        this.invalidLogin=false
        },
        error=>{
          console.log(error);
          this.invalidLogin=true
        }

    )
    
  }

     handleJWTAuthLogin(){
    this.basicAuthenticationService.executeJWTAuthenticationService(this.username, this.password)
    .subscribe(
      data=>{
        console.log(data);
        this.router.navigate(['welcome', this.username])
        this.invalidLogin=false
        },
        error=>{
          console.log(error);
          this.invalidLogin=true
        }

    )
    
  }

}
