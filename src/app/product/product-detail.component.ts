import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './products';
import { ProductService } from './product.service';


@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  errorMessage: string;
  product: IProduct;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private productService: ProductService) {

  }

  ngOnInit(): void {
    let id = +this.activatedRoute.snapshot.params['id'];
    this.pageTitle += `: ${id}`;
    this.getProduct(id);
  }

  getProduct(id: number) {
    this.productService.getProduct(id).subscribe(
      product => this.product = product,
      error => this.errorMessage = <any>error);
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
}