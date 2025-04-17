import { Injectable } from '@angular/core';
import {GeneralVariables} from '../../generalVariables';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor(
    private http: HttpClient
  ) {
  }

  private general = new GeneralVariables()
  private url = this.general.url.concat('/storage')

  getFile(imgUrl: string) {
    return this.url.concat('/get').concat(imgUrl)
  }
}
