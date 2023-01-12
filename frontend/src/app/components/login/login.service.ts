import { Injectable } from '@angular/core';
import { Login } from './login.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl: string = "http://localhost:3001/users"

  constructor(private http: HttpClient, private snackBar: MatSnackBar,) { }


  showMensagem(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    })
  }
  //criar usuário
  createUser(login: Login): Observable<Login>{

    return this.http.post<Login>(this.baseUrl, login)
  }
  //logar

  //buscar usuário
  searchName(name: string): Observable<Login>{
    const url = `${this.baseUrl}/${name}`
    return this.http.get<Login>(url)
  }
  searchPassword(password: string): Observable<Login>{
    const url = `${this.baseUrl}/${password}`
    return this.http.get<Login>(url)
  }

}


