import { Injectable } from '@angular/core';
import {GeneralVariables} from '../../../modules/generalVariables';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Category} from '../../models/categories/category.model';
import {Observable} from 'rxjs';
import {Page} from '../../models/page';
import {StorageService} from '../storageService/storage.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private general = new GeneralVariables();
  private readonly apiUrl = `${this.general.url}/category`;

  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) { }

  getCategories(
    search: string = '',
    page: number = 0,
    size: number = 12
  ): Observable<Page<Category>> {
    const params = new HttpParams()
      .set('search', search)
      .set('index', String(page))
      .set('size', String(size));

    return this.http.get<Page<Category>>(`${this.apiUrl}/search`, { params });
  }

  getCategoryImageUrl(imagePath: string): string {
    return this.storageService.getFileUrl(imagePath);
  }
}
