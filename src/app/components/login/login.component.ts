import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ourValidation;
  constructor() {
    this.ourValidation = new FormGroup({
      username:new FormControl('',[Validators.required, Validators.minLength(3)]),
      age:new FormControl('',[Validators.required,Validators.min(18),Validators.max(40)]),
      email: new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.minLength(8)])
    });
   }
 
  ngOnInit(): void {
  }
  get getUserName(){
    return this.ourValidation.controls['username'];
  }
  get getAge(){
    return this.ourValidation.controls['age'];
  }
  get getEmail(){
    return this.ourValidation.controls['email'];
  }
  get getPassword(){
    return this.ourValidation.controls['password'];
  }
  get checkUsernameValidation(){
    return  this.ourValidation.controls['username'].valid;
   }
 
   get checkAgeValidation(){
     return  this.ourValidation.controls['age'].valid;
    }
 
    get checkEmailValidation(){
     return  this.ourValidation.controls['email'].valid;
    }
 
    get checkPasswordValidation(){
     return  this.ourValidation.controls['password'].valid;
    }
    submitData(){
      // console.log(this.ourValidation.controls['username'].valid);
      // console.log(this.ourValidation.controls['age'].valid);
      // console.log(this.ourValidation.controls['email'].valid);
      // console.log(this.ourValidation.controls['password'].valid);
  
      console.log(this.ourValidation.status);
  
    }
}
