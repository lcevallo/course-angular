import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { ICardUser } from '@shared/components/cards/card-user/icard-user.metadata';
import {USERS_DATA} from '@data/constants/users.const';
import { UserService } from '@data/services/api/user.service';
import { ICarouselItem } from '@shared/components/carousel/Icarousel-item.metadata';
import { CAROUSEL_DATA_ITEMS } from '@data/constants/carousel.const';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements AfterViewInit, OnInit, OnDestroy {

  public carouselData: ICarouselItem[];
  public users: ICardUser[];
  public title: string;
  public userSubscription: Subscription;
  public pricePesos: number;
  public obj: any;
  public stringVar: string;
  public dateVar: number;
  public currencyVar: number;
  public decimalVar: number;
  public user: {
    name: string;
    role: string;
    gender: 'M' | 'F';
  };
  constructor(
    private $sUser: UserService
  ) {
    this.carouselData = CAROUSEL_DATA_ITEMS;
    this.$sUser.setTitle('Componente UserListComponent');
    this.title = this.$sUser.getTitle;
    this.pricePesos = 0;
    this.obj = [{id: 1, name: 'primero', joinDate: 1599935113003}, {id: 1, name: 'primero', joinDate: 1599935113003}];
    this.stringVar = 'Hola este es un curso de angular!';
    this.dateVar = (new Date()).getTime();
    this.currencyVar = 1240593.20;
    this.decimalVar = 3.3;
    this.user = {
      name: 'Iván Larios',
      gender: 'M',
      role: 'Super Administrador'
    };
  }

  ngOnInit() {
    this.getUsers();
    console.log('Users List - onInit');
  }

  ngAfterViewInit() {
    console.log('Users List - After View Init');
  }

  addAmount() {
    this.pricePesos += 10;
  }

  getUsers() {
    this.userSubscription = this.$sUser
      .getAllUsers()
      .subscribe( r =>  this.users = (r.error) ? [] : r.data );
  }

  ngOnDestroy() {
    this.$sUser.clearTitle();
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }
}
