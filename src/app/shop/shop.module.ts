import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModelModule } from '../model/model.module';
import { ShopComponent } from './shop.component';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from './navbar/navbar.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryListComponent } from './category-list/category-list.component';


@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
  providers: [],
  declarations: [ShopComponent, NavbarComponent, CartSummaryComponent, CartDetailComponent, CheckoutComponent, ProductListComponent, CategoryListComponent],
  exports: [ShopComponent, CartSummaryComponent, CartDetailComponent, CheckoutComponent]
})
export class ShopModule {

}
