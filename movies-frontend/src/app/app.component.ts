import { Component, Injectable, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
@Injectable({
  providedIn: 'root'
})
export class AppComponent implements OnInit{
  title = 'movies';
  isNotlogin= true;
  constructor(private router: Router){}
  ngOnInit(): void {
    this.islogin();
  }
  logOut(){
    localStorage.removeItem('user');
    this.router.navigateByUrl('login');
    this.isNotlogin=true;
  }
  islogin(){
    if (localStorage.getItem('user')){
      this.isNotlogin=false;
    }
  }
}
