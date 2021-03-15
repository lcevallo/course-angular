import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-title-h1',
  templateUrl: './title-h1.component.html',
  styleUrls: ['./title-h1.component.scss']
})
export class TitleH1Component implements DoCheck {
  @Input() pricePesos: number;
  public priceDollar: number;
  public priceEuro: number;

 @Input() text: string;
 @Input() type: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'dark';
  constructor() {
    this.text = '';
    this.type = 'primary';
    this.pricePesos = 0;
    this.priceDollar = 0;
    this.priceEuro = 0;
  }

  ngDoCheck() {
    this.priceDollar = this.pricePesos * this.getCurrentDollarFromApi();
    this.priceEuro = this.pricePesos * this.getCurrentEuroFromApi();
  }


  getCurrentDollarFromApi() {
    return 22;
  }

  getCurrentEuroFromApi() {
    return 22.5;
  }

}
