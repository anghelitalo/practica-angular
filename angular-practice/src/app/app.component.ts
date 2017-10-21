import { Component } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'ap-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Practica-Angular';

  constructor(private router:Router){}

  logout(){
    localStorage.removeItem('email');
    this.router.navigate([''])
  }
}
