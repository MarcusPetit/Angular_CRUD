import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductReloadComponent } from './components/product/product-reload/product-reload.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { HomeComponent } from'./views/home/home.component'
import { ProductCrudComponent } from './views/product-crud/product-crud.component'

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
