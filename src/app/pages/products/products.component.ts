import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products:any;
  search = "";
  constructor(
    public productsService: ProductsService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.init();
  }

  async init(){
    await this.route.params.subscribe(params => {
      this.search = params['search'];
    });
    this.productsService.getAllProducts(this.search).subscribe((res:any) => {
      this.products = res.results;
    });
  }
}
