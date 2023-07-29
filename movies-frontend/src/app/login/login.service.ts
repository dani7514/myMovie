import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { User } from './loginDto/login.dto';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user=[]; 
  constructor( private http: HttpClient){

  }

  login(user: User){
    return this.http.post('http://localhost:3000/auth/login',user)
    .pipe(map((res)=>{
        return res
    }));
  }

}