import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from './signUpDto/signUp.dto';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor( private http: HttpClient){

  }

  signUp(user: user){
    return this.http.post('http://localhost:3000/user',user);
  }

}
