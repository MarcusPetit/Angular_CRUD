import { LoginComponent } from './components/login/login/login.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductReloadComponent } from './components/product/product-reload/product-reload.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { HomeComponent } from'./views/home/home.component'
import { ProductCrudComponent } from './views/product-crud/product-crud.component'
import { CreateloginComponent } from './components/login/createlogin/createlogin.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "products",
    component: ProductCrudComponent
  },
  {
    path: "products/create",
    component: ProductCreateComponent
  },
  {
    path: "products/reload/:id",
    component: ProductReloadComponent
  },
  {
    path: "products/delete/:id",
    component: ProductDeleteComponent
  },
  {
    path: "login/login",
    component: LoginComponent
  },
  {
    path: "login/createlogin",
    component: CreateloginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
