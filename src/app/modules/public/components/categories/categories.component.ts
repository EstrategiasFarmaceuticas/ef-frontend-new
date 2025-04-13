
import { NgForOf } from '@angular/common';
import { RouterLink } from '@angular/router';
import {AfterViewInit, Component} from '@angular/core';
import {Category} from '../../../../core/models/categories/category.model';


@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [NgForOf, RouterLink],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent implements AfterViewInit {

  categorias = [
    new Category('Diabetes','/diabetes','categoriaKiks.jpg', true, new Date()),
    new Category('Cancer', '/cancer','categoriaOncologic.jpg', true, new Date()),

  ];

  ngAfterViewInit() {
    // Elimina el código de animaciones si no lo necesitas
  }

}
