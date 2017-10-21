import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import {Router} from '@angular/router'

@Component({
  selector: 'ap-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) {

   }

  ngOnInit() {
  }

  login(form: NgForm){
    console.log(form.value);
    //for now simulate the values
    if(form.value.email === 'admin@admin.com' && form.value.name === "12345"){
       localStorage.setItem( 'email', form.value.email);
       this.router.navigate(['/dashboard']);
    }
  }
}
