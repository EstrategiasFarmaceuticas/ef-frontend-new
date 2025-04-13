import { Injectable } from '@angular/core';
import {GeneralVariables} from '../../../modules/generalVariables';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private general = new GeneralVariables();
  private readonly apiUrl = `${this.general.url}/storage`;

  constructor(private http: HttpClient) { }

  uploadFile(file: File, name: string, path: string): Observable<string> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('name', name);
    formData.append('path', path);

    return this.http.post(`${this.apiUrl}/upload`, formData, {
      responseType: 'text'
    });
  }

  getFileUrl(path: string): string {
    return `${this.apiUrl}/get/${path}`;
  }
}
