import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  public getData(url: string, options?: any): Observable<any> {
    return this.http.get<any>(`https://fakestoreapi.com/products`);
  }
}
