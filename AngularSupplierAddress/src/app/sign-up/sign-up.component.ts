import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormGroup,FormControlName, FormControl} from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import{AuthService} from '../services/auth-service.service'
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  registerForm=new FormGroup({
    username:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  })

  constructor( private authservice:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
  registerform(){
    this.authservice.registerForm(this.registerForm.value).subscribe(data =>{
      alert('resister successfully!');
      this.router.navigate(['/login'])

    })
  }

  get username(){
    return this.registerForm.get('username')
  }
  get email(){
    return this.registerForm.get('email')
  }
  get password(){
    return this.registerForm.get('password')
  }

}
