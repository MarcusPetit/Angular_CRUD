import { Observable } from 'rxjs';
import { LoginService } from './../login.service';
import { Login } from './../login.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private loginservice: LoginService, private router: Router, private route: ActivatedRoute) { }

  login: Login = {
    name: '',
    password: ''

  }

  ngOnInit(): void {

  }


  a(): void {
    if (!this.loginservice.searchName(this.login.name)) {
      return this.loginservice.showMensagem('nenhum e-mail encontrado')
    }
    if (!this.loginservice.searchPassword(this.login.password)) {
      return this.loginservice.showMensagem('senha incorreta')


    }
    if (!this.login.name.includes("@")) {
      return this.loginservice.showMensagem('Precisa ser um Email valido');
    }

    if (this.login.password.length < 8) {
      return this.loginservice.showMensagem('Senha precisa ser maior que 8 dígitos');
    }

    this.loginservice.showMensagem('Acesso liberado')
    this.router.navigate(['/products'])




  }
  backView(): void {
    this.router.navigate(['/login/createlogin'])
  }



}






