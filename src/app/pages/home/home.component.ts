import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: any;
  token = "";
  constructor(public router:ActivatedRoute,
    public productsService: ProductsService) { }

  ngOnInit(): void {
   this.onInit();
  }

  async onInit(){
    await this.router.queryParams.subscribe(params => {
      this.token = params['code'];
      localStorage.setItem('token', this.token);
    });

    await this.productsService.getAllProducts().subscribe((res:any) => {
      this.products = res.results;
      const Total:Number = this.products.length;
      let randoms = [];
      while (12 < 13) {
        const id = Math.floor(Math.random() * (50));
        const product = this.products[id];
        randoms.push(product);
      }
      this.products = randoms;
    });

    if(!this.token){
      window.location.href="https://auth.mercadolibre.com.ar/authorization?response_type=code&client_id=5168009178858028&redirect_uri=http://localhost:4200";
    }


  }

}
