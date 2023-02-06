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





  // a(): void {
  //   function validateLogin(username: string, password: string): boolean {
  //     // Check the provided username and password against the credentials stored in the database
  //     // Return true if the login is valid, false if it is not
  //   }
  //   this.loginservice.search().subscribe(login => {
  //     this.login = login


  //   });


    // if (!this.loginservice.searchPassword(this.login.password)) {
    //   return this.loginservice.showMensagem('senha incorreta')


    // }
    // if (!this.login.name.includes("@")) {
    //   return this.loginservice.showMensagem('Precisa ser um Email valido');
    // }

    // if (this.login.password.length < 8) {
    //   return this.loginservice.showMensagem('Senha precisa ser maior que 8 dígitos');
    // }





}






