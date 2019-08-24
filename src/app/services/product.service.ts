import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  BACKEND_URL = environment.backendURL;

  constructor(private http: HttpClient) {

  }

  getProducts() {
    return this.http.get(this.BACKEND_URL + "products");
  }

  createProduct(form: any) {
    return this.http.post(this.BACKEND_URL + "products", form);
  }

}
