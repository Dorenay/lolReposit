import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { NEWS }  from '../database/news';
import { newsItem } from '../database/news-item';


@Component({
  selector: 'app-champion-page',
  templateUrl: './champion-page.component.html',
  styleUrls: ['./champion-page.component.scss']
})
export class ChampionPageComponent implements OnInit {
  thisID = '';
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => console.log(params))
   }

  ngOnInit() {
  }

}
