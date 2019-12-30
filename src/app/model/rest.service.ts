import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError, VirtualTimeScheduler} from 'rxjs';
import {Product} from './product.model';
import {Category} from './category.model';
import {Order} from './order.model';
import {catchError, map, retry} from 'rxjs/operators';

@Injectable()
export class RestService {

  baseUrl = 'http://localhost:3500/';
  token: string;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + 'products');
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl + 'categories');
  }

  saveOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.baseUrl + 'orders', order);
  }

  deleteProduct(product: Product): Observable<any> {
    return this.http.delete<any>(this.baseUrl + 'products/' + product.id);
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(this.baseUrl + 'products/' + product.id, JSON.stringify(product) , this.httpOptions);
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl + 'products', product);
  }

  authentication(username: string, password: string): Observable<boolean> {
    return this.http.post<any>(this.baseUrl + 'login', {
      username: username,
      password: password
    }).pipe(map(response => {
      this.token = response.succes ? response.token : null;
      console.log(this.token);
      return response.succes;
    }));
  }
}
