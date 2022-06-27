import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  public getProducts = async () => {
    const res = await this.http.get<any>('assets/products.json')
      .toPromise();
    const data = <Product[]>res.data;
    return data;
}
}
