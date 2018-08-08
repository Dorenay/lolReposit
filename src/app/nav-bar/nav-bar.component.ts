import { Component, OnInit } from '@angular/core';
import { NAVLINKS } from './nav-links';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  hrefs = NAVLINKS;
  constructor() { }

  ngOnInit() {
  }

}
