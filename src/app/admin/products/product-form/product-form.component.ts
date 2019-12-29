import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductRepository} from '../../../model/product.repository';
import {Product} from '../../../model/product.model';
import {Form} from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  editProduct = false;
  product: Product = new Product();

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private repository: ProductRepository) {
    this.editProduct = activatedRoute.snapshot.params.mode === 'edit';

    if (this.editProduct) {
      this.product = repository.getProduct(+activatedRoute.snapshot.params.id);
    }
  }

  ngOnInit() {
  }

  save(form: Form) {
    console.log(this.product);
    this.repository.saveProduct(this.product);
    this.router.navigateByUrl('admin/main/products');
  }

  onCancel() {
    this.router.navigateByUrl('admin/main/products');
  }

}
