import { Product } from './product.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable, Query } from '@angular/core';


//snackbar e para ter uma mensagem de cadastrado
import { MatSnackBar } from '@angular/material/snack-bar'
import { query } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl: string = "https://unique-trout-11.hasura.app/v1/graphql/";


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

function insert_users(objects: any, arg1: { id: string; name: string; }[]) {
  throw new Error('Function not implemented.');
}

