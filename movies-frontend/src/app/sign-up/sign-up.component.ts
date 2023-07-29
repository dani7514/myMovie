import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SignUpService } from './sign-up.service';
import { user } from './signUpDto/signUp.dto';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  constructor(private signUpService: SignUpService, private router: Router) { }
  onUserCreate(user: user){
    this.signUpService.signUp(user).subscribe()
    this.router.navigateByUrl('login')
  }
}
