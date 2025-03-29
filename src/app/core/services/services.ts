import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private apiUrl = 'https://api.tubackend.com/categories';

  constructor(private http: HttpClient) {}

  getCategories() {
    return this.http.get(this.apiUrl);
  }
}
