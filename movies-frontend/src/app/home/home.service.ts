import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Movies } from 'src/MoviesDto/movie.dto';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  
  
  constructor(private http: HttpClient) { }
  getUpComing(): any{
    return this.http.get<{[data: string]: Movies}>('http://localhost:3000/up-coming')
    .pipe(map((res)=>{
      const product=[];
      for(let data in res){
        if(res.hasOwnProperty(data)){
          product.push({...res[data], id: data})
        }
      }
      return product
    })) 
  }

  getpopular(): any{
    const page=1;
    const limit=10;
    const result= this.http.get<{[data: string]: Movies}>(`http://localhost:3000/popular?page=${page}&limit=${limit}`)
        .pipe(map((res)=>{
          const product=[];
          for(let data in res){
            if(res.hasOwnProperty(data)){
              product.push({...res[data], id: data})
            }
          }
          return product
        })) 

    return result
  }
  getpopularfeatured(): any{
    const page=1;
    const limit=4;
    const result= this.http.get<{[data: string]: Movies}>(`http://localhost:3000/popular?page=${page}&limit=${limit}`)
        .pipe(map((res)=>{
          const product=[];
          for(let data in res){
            if(res.hasOwnProperty(data)){
              product.push({...res[data], id: data})
            }
          }
          return product
        })) 

    return result
  }

  getTrending(): any{
    const page=1;
    const limit=10;
    const result= this.http.get<{[data: string]: Movies}>(`http://localhost:3000/trending?page=${page}&limit=${limit}`)
        .pipe(map((res)=>{
          const product=[];
          for(let data in res){
            if(res.hasOwnProperty(data)){
              product.push({...res[data], id: data})
            }
          }
          return product
        })) 

    return result
  }

  getTrendingfeatured(): any{
    const page=1;
    const limit=4;
    const result= this.http.get<{[data: string]: Movies}>(`http://localhost:3000/trending?page=${page}&limit=${limit}`)
        .pipe(map((res)=>{
          const product=[];
          for(let data in res){
            if(res.hasOwnProperty(data)){
              product.push({...res[data], id: data})
            }
          }
          return product
        })) 

    return result
  }
  

}
