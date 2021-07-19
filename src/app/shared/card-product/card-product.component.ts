import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent implements OnInit {

  datosExistentes: any;
  @Input() product: any;
  @Input() cart = false;
  @Output() removeItem: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addToCart(value: any){
    this.datosExistentes = localStorage.getItem('carrito');
    this.datosExistentes = this.datosExistentes === null ? [] : JSON.parse(this.datosExistentes);
    this.datosExistentes.push(value);

    localStorage.setItem('carrito', JSON.stringify(this.datosExistentes))

    this.removeItem.emit(true);
  }

  removeFromCart(value: any){
    this.datosExistentes = localStorage.getItem('carrito');
    this.datosExistentes = this.datosExistentes === null ? [] : JSON.parse(this.datosExistentes);
    const id = this.datosExistentes.indexOf(this.datosExistentes.find((x:any) => x.id == value.id));
    this.datosExistentes.splice(id, 1);

    localStorage.setItem('carrito', JSON.stringify(this.datosExistentes))

    this.removeItem.emit(true);
  }

}
