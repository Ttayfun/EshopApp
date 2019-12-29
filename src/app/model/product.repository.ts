import {Injectable} from '@angular/core';
import {RestService} from './rest.service';
import {Product} from './product.model';
import {Category} from './category.model';

@Injectable()
export class ProductRepository {
  private product: Product[] = [];

  constructor(private restService: RestService) {
    this.restService.getProducts().subscribe(pr => this.product = pr);

  }

  getProduct(id: number): Product {
    return this.product.find(pr => pr.id === id);
  }

  getProducts(category?: Category): Product[] {
    if (category) {
      return this.product.filter(p => p.category == category.name);
    } else {
      return this.product;
    }
  }

  deleteProduct(product: Product) {
    this.restService.deleteProduct(product).subscribe();
  }

  updateProduct(product: Product) {
    this.restService.updateProduct(product).subscribe();
  }

  addProduct(product: Product) {
    this.restService.addProduct(product).subscribe();
  }

  saveProduct(product: Product) {
    if (product.id == null || product.id === 0) {
      this.restService.addProduct(product).subscribe();
    } else {
      this.restService.updateProduct(product).subscribe(p => {
        console.log('p', p);
      });
    }
  }

}
