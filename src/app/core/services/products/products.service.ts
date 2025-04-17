import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GeneralVariables } from '../../../modules/generalVariables';
import { Product } from '../../models/products/product.model';
import {StorageService} from '../storageService/storage.service';
import {Page} from '../../models/page';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private general = new GeneralVariables();
  private readonly apiUrl = `${this.general.url}/product`;

  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) { }

  getProductsByCategory(
    categoryName: string,
    page: number = 0,
    size: number = 12
  ): Observable<Page<Product>> {
    const params = new HttpParams()
      .set('name', categoryName)
      .set('status', 'true')
      .set('bothStatus', 'false')
      .set('index', String(page))
      .set('size', String(size));

    return this.http.get<Page<Product>>(`${this.apiUrl}/search/category`, { params });
  }

  getProductsByName(
    searchTerm: string = '',
    page: number = 0,
    size: number = 12
  ): Observable<Page<Product>> {
    const params = new HttpParams()
      .set('name', searchTerm)
      .set('status', 'true')
      .set('bothStatus', 'false')
      .set('index', String(page))
      .set('size', String(size));

    return this.http.get<Page<Product>>(`${this.apiUrl}/search/name`, { params });
  }

  getMainProduct(): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/main`);
  }

  getProductImageUrl(imagePath: string): string {
    return this.storageService.getFile(imagePath);
  }
}
