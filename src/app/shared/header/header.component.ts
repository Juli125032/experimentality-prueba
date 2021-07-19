import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router, NavigationExtras } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  productos: any;
  number = 0;
  search = new FormControl('');

  constructor(public router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.productos = localStorage.getItem('carrito');
      this.productos = JSON.parse(this.productos);
      this.number = this.productos.length;
    }, 1000);
  }



  searchProducts(){
    if(this.search.value){
      const value = this.search.value;
      this.router.navigate(['products/'+value]);
    }
  }

}
