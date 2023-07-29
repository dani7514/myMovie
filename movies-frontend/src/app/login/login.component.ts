import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { LoginService } from './login.service';
import { User } from './loginDto/login.dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

 user=[];
 constructor(private loginService: LoginService, private router: Router, private appComponent: AppComponent){

 }

 onLoginCheck(user: User){
  this.loginService.login(user).subscribe(result=>{
    this.user.push(result);
    if(this.user[0].message==='Unauthorized'){
      alert('invalid username or password')
    }
    else{
      alert(this.user[0].message)
      localStorage.setItem('user',`${this.user[0].access_token}`)
      this.appComponent.isNotlogin=false;
      this.router.navigateByUrl('home')
    }
 })
}
}
