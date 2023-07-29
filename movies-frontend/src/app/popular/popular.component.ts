import { Component ,OnInit} from '@angular/core';
import { PopularService } from './popular.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {
 
  populares=[]
  constructor(private popularService: PopularService){}
  ngOnInit(): void {
    this.popular();
  }
  
  popular(){
    this.popularService.getpopular().subscribe((data)=>{
      this.populares=data;
    })
  }
  

  getSmt(gener: any){
    this.popularService.getpopularByGener(gener).subscribe((data)=>{
      this.populares=data;
      
  })
 }
 loadingMore(){
  this.popularService.loadingMore().subscribe((data)=>{
    this.populares=data;
})
}
}
