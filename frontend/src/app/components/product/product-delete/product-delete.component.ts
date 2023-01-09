import { Product } from './../product.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})


export class ProductDeleteComponent implements OnInit {

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }
  
  product: Product = {
    name: "",
    
  }
  
  
  ngOnInit(): void {
    const id = +`${this.route.snapshot.paramMap.get("id")}`;
    product: this.product;
    
    this.productService.readById(id).subscribe(product => {
      this.product = product
      
    })
    
  };
  

  delete(): void {
    this.productService.deleteProduct(`${this.product['id']}`).subscribe(() => {
      this.productService.showMensagem('Operação executada com sucesso')
      this.router.navigate(['/products'])



    })
  }

  backView(): void {
    this.router.navigate(['/products'])
  }

}
