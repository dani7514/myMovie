import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Movies } from 'src/MoviesDto/movie.dto';

@Injectable({
  providedIn: 'root'
})
export class TredingService {
   page=1;
   limit=8;
   catagory=''
   checkCatagory=''
  constructor(private http: HttpClient) { }
  getTreding(): any{
    console.log(this.page,this.limit)
    const result= this.http.get<{[data: string]: Movies}>(`http://localhost:3000/trending?page=${this.page}&limit=${this.limit}`)
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
  
  getTredingByCatagory(catagory: any){
    this.catagory=catagory;
    if (this.catagory!==this.checkCatagory){
      this.page=1
      this.limit=8
    }
    const result= this.http.get<{[data: string]: Movies}>(`http://localhost:3000/trending?catagory=${catagory}&page=${this.page}&limit=${this.limit}`)
        .pipe(map((res)=>{
          const product=[];
          for(let data in res){
            if(res.hasOwnProperty(data)){
              product.push({...res[data], id: data})
            }
          }
          return product
        })) 
        this.checkCatagory=this.catagory;
        
      

    return result
  }

  loadingMore(): any{
    if (this.catagory===this.checkCatagory){
      this.limit+=8
    }
    
    console.log(this.catagory,this.page,this.limit)
    const result= this.http.get<{[data: string]: Movies}>(`http://localhost:3000/trending?gener=${this.catagory}&page=${this.page}&limit=${this.limit}`)
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