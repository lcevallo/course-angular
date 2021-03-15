import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss']
})
export class SkeletonComponent implements AfterViewInit, OnInit {
  public showLeftNav = true;
  public $theme = 'blue-dark';
  public loader = 'assets/images/loader/loader.gif';
  public isLoading = true;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }

  showMenu() {
    this.showLeftNav = !this.showLeftNav;
  }
}
