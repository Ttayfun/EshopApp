import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ShopModule} from './shop/shop.module';
import {RouterModule} from '@angular/router';
import {ShopComponent} from './shop/shop.component';
import {CartDetailComponent} from './shop/cart-detail/cart-detail.component';
import {CheckoutComponent} from './shop/checkout/checkout.component';
import {AdminModule} from './admin/admin.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ShopModule,
    RouterModule.forRoot([
      {path: 'shop', component: ShopComponent},
      {path: 'cart', component: CartDetailComponent},
      {path: 'checkout', component: CheckoutComponent},
      // {path: 'admin', loadChildren: "./admin/admin.module#AdminModule"},
      {path: 'admin', loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule)},
      {path: '**', redirectTo: '/shop'},

    ])

  ],
  providers: [AdminModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
