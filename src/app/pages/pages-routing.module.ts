import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartProductsComponent } from './cart-products/cart-products.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { 
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  { 
    path: 'products/:search',
    component: ProductsComponent
  },
  { 
    path: 'products',
    component: ProductsComponent
  },
  { 
    path: 'cart',
    component: CartProductsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
