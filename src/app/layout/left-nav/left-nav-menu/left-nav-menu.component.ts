import { Component, OnInit, Input } from '@angular/core';
import { LEFT_NAV_MENUS } from '@data/constants/left-nav-menu.const';
import { ILeftNavMenu } from '@data/interfaces';

@Component({
  selector: 'app-left-nav-menu',
  templateUrl: './left-nav-menu.component.html',
  styleUrls: ['./left-nav-menu.component.scss']
})
export class LeftNavMenuComponent implements OnInit {
  @Input() data: ILeftNavMenu;
  constructor() { }

  ngOnInit() {
  }

}
