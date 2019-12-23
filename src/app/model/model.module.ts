import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RestService } from './rest.service';
import { ProductRepository } from './product.repository';
import { CategoryRepository } from './category.repository';
import { CartItem, Cart } from './cart.model';
import { Order } from './order.model';
import { OrderRepository } from './order.repository';


@NgModule({
  imports: [HttpClientModule],
  providers: [RestService, ProductRepository, CategoryRepository, OrderRepository, CartItem, Cart, Order]
})
export class ModelModule {

}
