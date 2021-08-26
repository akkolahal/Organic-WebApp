import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/product';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CustomerorderService {

  constructor(private httpcli : HttpClient) {}

    addProduct(data : Product) : Observable<Product>
    {
        return this.httpcli.post<Product>('http://localhost:3000/products', data);
    }
     
    fetchProduct() : Observable<Array<Product>>
    {
      return this.httpcli.get<Array<Product>>('http://localhost:3000/products');
    }


}
