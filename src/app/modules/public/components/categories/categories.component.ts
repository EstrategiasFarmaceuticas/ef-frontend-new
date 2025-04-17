
import {CommonModule} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {Category, CategoryResponse} from '@model/categories/category.model';
import {CategoriesService} from '@service/categories/categories.service';
import {FormsModule} from '@angular/forms';
import {finalize} from 'rxjs';
import {StorageService} from '@service/storageService/storage.service';

import {Router} from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent implements OnInit {

  searchQuery = '';
  categories: Category[] = [];
  currentPage = 0;
  readonly pageSize = 12;
  totalPages = 1;
  totalElements = 0;
  isLoading = false;
  isExternalImage = false;

  constructor(
    private categoriesService: CategoriesService,
    private storageService: StorageService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.isLoading = true;

    // Mostrar siempre categorías activas (true), ignorando el filtro actual
    const status = true; // Siempre activas
    const bothStatus = false; // Nunca mostrar ambas

    this.categoriesService.searchCategories(
      this.searchQuery.trim(),
      status,
      bothStatus,
      this.currentPage,
      this.pageSize
    ).pipe(
      finalize(() => this.isLoading = false)
    ).subscribe({
      next: (response) => this.handleResponse(response),
      error: (error) => this.handleError(error)
    });
  }
  private handleResponse(response: CategoryResponse): void {
    this.categories = response.content.map(category => {
      // Determinar si es imagen externa para cada categoría
      this.isExternalImage = this.checkIfExternalImage(category.imageUrl);

      return {
        ...category,
        // Procesar la URL según el tipo de imagen
        imageUrl: this.isExternalImage ? category.imageUrl : this.storageService.getFile(category.imageUrl)
      };
    });

    this.totalElements = response.page.totalElements;
    this.totalPages = response.page.totalPages;
  }
  private checkIfExternalImage(url: string): boolean {
    return url?.startsWith('http') || url?.startsWith('https');
  }
  private handleError(error: any): void {
    console.error('Error loading categories:', error);
    this.categories = [];
    this.totalElements = 0;
    this.totalPages = 1;
  }

  handleImageError(event: Event): void {
    const imgElement = event.target as HTMLImageElement;

    // Opción 1: Cambiar a imagen por defecto
    imgElement.src = 'assets/images/default-category.png';

    // Opción 2: Si es externa, intentar cambiar el protocolo
    if (this.isExternalImage) {
      imgElement.src = imgElement.src.replace(/^https?/, match =>
        match === 'https' ? 'http' : 'https'
      );
    }

    // Prevenir bucles infinitos
    imgElement.onerror = null;
    imgElement.classList.add('object-contain');
  }

  selectCategory(category: Category): void {
    // Navegamos al componente de productos con los datos de la categoría
    this.router.navigate(['/category',category.name], {
      state: {
        category: {
          ...category,
          // Procesamos la URL de la imagen correctamente
          imageUrl: this.checkIfExternalImage(category.imageUrl)
            ? category.imageUrl
            : this.storageService.getFile(category.imageUrl)
        }
      }
    });
  }
}
