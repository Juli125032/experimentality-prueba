import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  
  url = "https://api.mercadolibre.com/oauth/token";
  client_id = "5168009178858028";
  client_secret = "RSnUGNiHjr38Fe3mOSbre45vh77fKkz4";
  code = "TG-60f45388c3a3b400084470e1-793147139";
  redirect_uri = "http://localhost:4200";
  token = localStorage.getItem('token');
  
  // TG-60f454a27e0d820007cad39b-793147139

  optionsHeader = {
    headers: new HttpHeaders({
      Authorization: 'Bearer '+ JSON.stringify(this.token)
    })
  };

  constructor(private http: HttpClient) { }

  public getToken(){
    const body = {
      accept: 'application/json',
      grant_type: 'authorization_code',
      client_id: this.client_id,
      client_secret: this.client_secret,
      code: this.code,
      redirect_uri: this.redirect_uri
    }
    
    return this.http.post(this.url, body);
  }
}
