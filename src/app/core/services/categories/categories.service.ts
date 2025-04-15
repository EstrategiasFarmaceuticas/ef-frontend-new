import { Injectable } from '@angular/core';
import {GeneralVariables} from '../../../modules/generalVariables';
import {HttpClient, HttpParams} from '@angular/common/http';
import {CategoryResponse} from '../../models/categories/category.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private general = new GeneralVariables();
  private readonly apiUrl = `${this.general.url}/category`;

  constructor(
    private http: HttpClient,
  ) { }

  searchCategories(
    search: string = '',
    status: boolean = true,
    bothStatus: boolean = false,
    page: number = 0,
    size: number = 12
  ): Observable<CategoryResponse> {
    const params = new HttpParams()
      .set('search', search)
      .set('status', String(status))
      .set('bothStatus', String(bothStatus))
      .set('index', String(page))
      .set('size', String(size));

    return this.http.get<CategoryResponse>(`${this.apiUrl}/search`, { params });
  }
}
