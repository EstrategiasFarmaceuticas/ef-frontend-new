
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


   /*
    { nombre: 'Kids', imagen: 'categoriaKiks.jpg', ruta: '/bowel-management' },
    { nombre: 'Oncology Care', imagen: 'categoriaOncologic.jpg', ruta: '/oncology-care' },
    { nombre: 'Renal Disease', imagen: 'assets/renal-disease.png', ruta: '/renal-disease' },
    { nombre: 'Protein & Calorie Malnutrition', imagen: 'assets/protein-calorie.png', ruta: '/protein-calorie' },
    { nombre: 'Dysphagia', imagen: 'assets/dysphagia.png', ruta: '/dysphagia' },
    { nombre: 'Urinary Tract Infections', imagen: 'assets/urinary-tract.png', ruta: '/urinary-tract' },
    { nombre: 'Wound Care', imagen: 'assets/wound-care.png', ruta: '/wound-care' },*/
  ];

  ngAfterViewInit() {
    // Elimina el código de animaciones si no lo necesitas
  }

}
