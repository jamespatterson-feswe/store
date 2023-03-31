import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from '../../models/products.interface';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  public getRequest(url: string, options?: any): Observable<Products[]> {
    return this.http.get<any>(`https://fakestoreapi.com/products`);
  }
}
