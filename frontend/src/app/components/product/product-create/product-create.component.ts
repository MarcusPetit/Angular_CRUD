import { ProductService } from './../product.service';
import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.model';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})

export class ProductCreateComponent implements OnInit {
  constructor(private productService: ProductService, private router: Router,  )  { }

  product: Product ={
    name: "",
    price: 0
  }

  ngOnInit(): void {

  }
  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMensagem('Operação executada com sucesso')
      this.router.navigate(['/products'])



    })
  }
  backView(): void {
    this.router.navigate(['/products'])
  }


}
