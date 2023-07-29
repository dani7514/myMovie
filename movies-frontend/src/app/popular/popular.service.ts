import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Movies } from 'src/MoviesDto/movie.dto';

@Injectable({
  providedIn: 'root'
})
export class PopularService {
   page=1;
   limit=8;
   gener='';
   checkGener='';
  constructor(private http: HttpClient) { }
  getpopular(): any{
    console.log(this.gener,this.limit,this.page)
    const result= this.http.get<{[data: string]: Movies}>(`http://localhost:3000/popular?page=${this.page}&limit=${this.limit}`)
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
  
  getpopularByGener(gener: any){
    this.gener=gener;
    if (this.gener!==this.checkGener){
      this.page=1
      this.limit=8
    }
    const result= this.http.get<{[data: string]: Movies}>(`http://localhost:3000/popular?gener=${gener}&page=${this.page}&limit=${this.limit}`)
        .pipe(map((res)=>{
          const product=[];
          for(let data in res){
            if(res.hasOwnProperty(data)){
              product.push({...res[data], id: data})
            }
          }
          return product
        })) 
        this.checkGener=this.gener;
        
      

    return result
  }

  loadingMore(): any{
    if (this.gener===this.checkGener){
      this.limit+=8
    }
    
    console.log(this.gener,this.page,this.limit)
    const result= this.http.get<{[data: string]: Movies}>(`http://localhost:3000/popular?gener=${this.gener}&page=${this.page}&limit=${this.limit}`)
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

  returnLimit(){
      return this.limit
    }

}
