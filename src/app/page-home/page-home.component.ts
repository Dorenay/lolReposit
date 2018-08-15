import { Component, OnInit } from '@angular/core';
import { NEWS } from '../database/news';
import { newsItem } from '../database/news-item';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss']
})
export class PageHomeComponent implements OnInit {
  nw = NEWS[NEWS.length-1];
  constructor() { }

  ngOnInit() {
  }

}
