import { Component } from '@angular/core';
import { TredingService } from './treding.service';

@Component({
  selector: 'app-treding',
  templateUrl: './treding.component.html',
  styleUrls: ['./treding.component.css']
})
export class TredingComponent {
  limit=0
  tredinges=[]
  constructor(private tredingService: TredingService){}
  ngOnInit(): void {
    this.treding();
  }
  
  treding(){
    this.tredingService.getTreding().subscribe((data)=>{
      this.tredinges=data;
    })
  }

  getSmt(catagory: any){
    this.tredingService.getTredingByCatagory(catagory).subscribe((data)=>{
      this.tredinges=data;
      
  })
 }
 loadingMore(){
  this.tredingService.loadingMore().subscribe((data)=>{
    this.tredinges=data;
})
}
}
