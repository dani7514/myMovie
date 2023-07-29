import { Component,OnInit} from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit{
  public upcominges=[];
  public populares=[];
  public featuredpopulares=[];
  public trendinges=[];
  public featuredTrendinges=[];
  constructor(private homeService: HomeService){}
  ngOnInit(): void {
    this.upcoming();
    this.popular();
    this.trending();
    this.featuredpopular();
    this.featuredTrending();
  }
  
  upcoming(){
    this.homeService.getUpComing().subscribe((data)=>{
      this.upcominges=data;
    })
  }

  popular(){
    this.homeService.getpopular().subscribe((data)=>{
      this.populares=data;
    })
  }
  featuredpopular(){
    this.homeService.getpopularfeatured().subscribe((data)=>{
      this.featuredpopulares=data;
    })
  }
  trending(){
    this.homeService.getTrending().subscribe((data)=>{
      this.trendinges=data;
    })
  }
  featuredTrending(){
    this.homeService.getTrendingfeatured().subscribe((data)=>{
      this.featuredTrendinges=data;
    })
  }
 
 

  
 

}
