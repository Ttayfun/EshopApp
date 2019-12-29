import {Component, OnInit} from '@angular/core';
import {ProductRepository} from '../../../model/product.repository';
import {Product} from '../../../model/product.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private repository: ProductRepository,
              private router: Router) {
  }

  ngOnInit() {
  }

  getAllProduct(): Product[] {
    return this.repository.getProducts();
  }

  deleteProduct(product: Product) {
    this.repository.deleteProduct(product);
    this.router.navigateByUrl('admin/main/products');
  }

  onEdit(id: any) {
    this.router.navigateByUrl('admin/main/products/edit/' + id);
  }

  onAdd() {
    this.router.navigateByUrl('admin/main/products/create/');
  }

}
