import { Component , OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { Login } from '../login.model';

@Component({
  selector: 'app-createlogin',
  templateUrl: './createlogin.component.html',
  styleUrls: ['./createlogin.component.css']
})
export class CreateloginComponent implements OnInit{

  constructor(private loginservice: LoginService, private router: Router) { }

  login: Login = {
    name: '',
    password: ''

  }

  ngOnInit(): void {

  }

  validationForCreate(): void {
    if (!this.login.name.includes("@")) {
      return this.loginservice.showMensagem('Precisa ser um Email valido');
    }

    if (this.login.password.length < 8) {
      return this.loginservice.showMensagem('Senha precisa ser maior que 8 dígitos');
    }

    this.loginservice.createUser(this.login).subscribe(() => {
      this.loginservice.showMensagem('Login criado com sucesso')
      this.router.navigate(['/products'])
    })
  }

}
