import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { ProductsComponent } from './products/products.component';
import { CartProductsComponent } from './cart-products/cart-products.component';


@NgModule({
  declarations: [
    HomeComponent,
    ProductsComponent,
    CartProductsComponent
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
