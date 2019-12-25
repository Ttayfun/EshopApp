import { Component, OnInit } from '@angular/core';
import { ProductRepository } from '../model/product.repository';
import { CategoryRepository } from '../model/category.repository';
import { Product } from '../model/product.model';
import { Category } from '../model/category.model';
import { Cart } from '../model/cart.model';
import { Router } from '@angular/router';

@Component({
  selector: 'shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  public selectedCategory: Category = null;
  public productsPerPage = 3; // her sayfada kaç ürün olamsını isityoruz
  public selectedPage = 1;  // hangi sayfa aktif olsun



  constructor(private productRepository: ProductRepository) { }


  get products(): Product[] {
    const index = (this.selectedPage - 1) * this.productsPerPage;
    return this.productRepository
                      .getProducts(this.selectedCategory)
                      .slice(index, index + this.productsPerPage);
  }

  get pageNumbers(): number[]{
    return Array(Math.ceil(this.productRepository
                  .getProducts(this.selectedCategory).length / this.productsPerPage))
                  .fill(0) // diziye 0 değerini atıyoruz
                  .map((a, i ) => i + 1 )
  }

  changePage(p: number){
    this.selectedPage = p;
  }

  ngOnInit() {
  }

}
