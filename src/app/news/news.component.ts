import { Component, OnInit, Input} from '@angular/core';
import { newsItem } from '../database/news-item';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  @Input() novuna = newsItem;
  constructor() { }

  ngOnInit() {
  }

}
