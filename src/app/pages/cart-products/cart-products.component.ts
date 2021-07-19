import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-products',
  templateUrl: './cart-products.component.html',
  styleUrls: ['./cart-products.component.scss']
})
export class CartProductsComponent implements OnInit {

  products: any;
  constructor() { }

  ngOnInit(): void {
    this.loadProducts(true);
  }

  loadProducts(event?: boolean){
    if(event){
      this.products = localStorage.getItem('carrito');
      this.products = JSON.parse(this.products);
    }
  }

}
