import { Component, OnInit } from '@angular/core';
import { NEWS } from '../database/news';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {
  NS = NEWS.sort(function(a,b){
    if (a.id < b.id){
      return 1;
    }else{
      return -1;
    }
  });
  constructor() { }

  ngOnInit() {
  }

}
