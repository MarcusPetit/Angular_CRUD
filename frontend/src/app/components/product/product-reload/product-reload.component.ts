import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-product-reload',
  templateUrl: './product-reload.component.html',
  styleUrls: ['./product-reload.component.css']
})
export class ProductReloadComponent implements OnInit {

  product: Product = {
    name: null,
    price: null,
    
  } 
  

  constructor(private productService: ProductService,
    private router: Router, private route: ActivatedRoute,) { }
    
    ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get("id");
      product: this.product;

      this.productService.readById("id").subscribe(product => {
      this.product = product

    })

  }
  updateProduct(): void {
    this.productService.update(this.product).subscribe(()=>{
      this.productService.showMensagem('Operação executada com sucesso')
      this.router.navigate(['/products'])
    })
  }
  
  backView(): void {
    this.router.navigate(['/products'])
  }

}
