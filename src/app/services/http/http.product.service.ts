import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../models/products.interface';

@Injectable({
  providedIn: 'root'
})
export class HttpProductService {

  constructor(private http: HttpClient) { }

  public getProduct(url: string, options?: any): Observable<Product> {
    return this.http.get<Product>(url);
  }

  public getProducts(url: string, options?: any): Observable<Product[]> {
    return this.http.get<Product[]>(url);
  }
}
