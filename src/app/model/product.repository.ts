import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { Product } from './product.model';
import { Category } from './category.model';

@Injectable()
export class ProductRepository {
  private product: Product[] = [];

  constructor(private restService: RestService) {
    this.restService.getProducts().subscribe(pr => this.product = pr);

  }

  getProduct(id: number): Product {
   return this.product.find( pr => pr.id === id);
  }

  getProducts( category: Category): Product[] {
   if (category) {
    return this.product.filter( p => p.category == category.name )
  } else {
    return this.product;
  }}

}
