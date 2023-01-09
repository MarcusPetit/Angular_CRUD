import { Observable } from 'rxjs';
import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//snackbar e para ter uma mensagem de cadastrado 
import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl: string = "http://localhost:3001/products";


  constructor(private snackBar: MatSnackBar, private http: HttpClient) { };
  //mostra uma mensagem de produto cadastrado
  showMensagem(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    })
  }
  //faz um post de cadastro de produto
  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product)
  }
  //vai ler os produtos do back 
  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl)
  }
  // procurar pelo produto por id
  readById(id: number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url)
  }
  // atualizar o produto
  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url, product)
  }
  //deletar o produto
  deleteProduct(id: string): Observable<Product> {
    const url = `${this.baseUrl}/${id}`

    return this.http.delete<Product>(url)
  }
}

