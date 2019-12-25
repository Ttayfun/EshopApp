import {Product} from './product.model';
import {Injectable} from '@angular/core';

@Injectable()
export class Cart { // sepet
  public itemCount = 0; // kartta kaç ürün var
  public items: CartItem [] = []; // Ürünler
  public total = 0; // kart içindeki toplam ürün fiyatı

  addItem(product: Product, quantity: number = 1) {

    const item = this.items.find(i => i.product.id === product.id);
    if (item !== undefined) {
      item.quantity += quantity;
    } else {
      this.items.push(new CartItem(product, quantity));
    }
    this.calculate();
  }


  updateQuantity(product: Product, quantity: number) { // ürün güncelleme
    const item = this.items.find(i => i.product.id === product.id);
    if (item !== undefined) {
      item.quantity = quantity;
    }
    this.calculate();
  }

  calculate() {  // her işlemden sonra bilgileri günceller
    this.itemCount = 0;
    this.total = 0;

    this.items.forEach(item => {
      this.itemCount += item.quantity;
      this.total += (item.quantity * +item.product.price);
    });
  }

  removeItem(id: number) {  // ürün silme
    const index = this.items.findIndex(i => i.product.id === id); // sileceğimiz ürünün indexini bulup siliyoruz.
    this.items.splice(index, 1); // indexten itibaren il 0 değeri sil yani indexi 1 dersek 0 ve 1 siler
    this.calculate();
  }

  clear() { //  cart temizleme
    this.items = [];
    this.itemCount = 0;
    this.total = 0;
  }

}

@Injectable()
export class CartItem { // ürün

  constructor(
    public product: Product,
    public quantity: number) {
  }

}
