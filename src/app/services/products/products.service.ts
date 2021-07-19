import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private url = "https://api.mercadolibre.com/";

  optionsHeader = {};

  constructor(private http: HttpClient,
    private tokenService: TokenService) {
    const token = this.tokenService.getToken();
    // Si necesita el token
    this.optionsHeader = {
      headers: new HttpHeaders({
        Authorization: 'Bearer '+token
      })
    };
  }

  public getAllProducts(search?: any){
    this.url = "https://api.mercadolibre.com/";
    this.url = (search) ? this.url+"sites/MCO/search?q="+search+"&category=MCO1430" : this.url+"sites/MCO/search?category=MCO1430";
    return this.http.get(this.url);
  }
}
