import { Component } from '@angular/core';
import {Category} from '../../../../core/models/category.model';
import {Product} from '../../../../core/models/product.model';

@Component({
  selector: 'app-bestproduct',
  imports: [],
  templateUrl: './bestproduct.component.html',
  styleUrl: './bestproduct.component.css'
})
export class BestproductComponent {
  bestProduct = new Product(
    'Producto Oncare',
    'Descripción del producto ejemplo',
    'https://example.com/nutricional',
    'bestProduct.png',
    true,
    true,
    'Descripción corta del producto ejemplo',
    new Date()
  );
}

