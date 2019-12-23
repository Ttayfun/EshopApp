import { Cart } from './cart.model';
import { Injectable } from '@angular/core';

@Injectable()
export class Order {
  public id: number;
  public name: string;
  public address: string;
  public city: string;
  public phone: string;
  public mail: string;

  public isSent: false;

  constructor( public cart: Cart ) { }


  clearOrder() {
    this.id = null;
    this.address = this.cart = this.city = this.mail = this.name = this.phone = null;
    this.isSent = false;
    this.cart.clear();
  }
}
