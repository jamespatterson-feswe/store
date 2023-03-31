import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor() { }

  public getData(url: string, headers?: any, body: any): Observable<any> {

  }
}
