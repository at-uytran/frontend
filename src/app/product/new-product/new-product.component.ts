import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import { NgForm, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  productForm: FormGroup;


  constructor(fb: FormBuilder,
    private productService: ProductService) {
    this.productForm =  fb.group({
      name: new FormControl(''),
      category_id: new FormControl(''),
      price: new FormControl('')
    });
  }

  ngOnInit() {
  }

  createProduct(form: any) {
    let body = {product:{
                  name: form.value.name,
                  category_id: form.value.category_id,
                  price: form.value.price
               }};
    this.productService.createProduct(body).subscribe();
  }
}
