import { Component } from '@angular/core';
import { CustomersService } from '../../services/customers.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  providers:[CustomersService],
  imports: [HttpClientModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styles: ``
})
export class LoginComponent {
  constructor(private CustServ:CustomersService, private router:Router){  
  }

  AddCustomer( email:any, password:any){
    let newCustomer = { email, password};
    this.CustServ.AddCustomer(newCustomer).subscribe(
      {complete:()=> {
      this.router.navigateByUrl('');},
    }
    );

  }
  myRegValid = new FormGroup({
    email:new FormControl("mariam45@gmail.com",[Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]),
    password:new FormControl("A1a*12347",[Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()-_+=])[A-Za-z\d!@#$%^&*()-_+=]{9,}$/)])
    // (?=.*[A-Z]): At least one uppercase letter.
    // (?=.*[a-z]): At least one lowercase letter.
    // (?=.*\d): At least one digit.
    // (?=.*[!@#$%^&*()-_+=]): At least one special character.
    // [A-Za-z\d!@#$%^&*()-_+=]{12,}: Allow only letters, digits, and the specified special characters, with a minimum length of 12 characters.
    
  })
 
  get emailValid(){
    return this.myRegValid.controls["email"].valid;
  }
  get passwordValid(){
    return this.myRegValid.controls["password"].valid;
  }
  

}
