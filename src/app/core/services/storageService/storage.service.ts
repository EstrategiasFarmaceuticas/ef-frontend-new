import { Injectable } from '@angular/core';
import {GeneralVariables} from '../../../modules/generalVariables';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private general = new GeneralVariables()
  private url = this.general.url.concat('/storage')

  constructor(private http: HttpClient) { }


  getFile(imgUrl: string) {
    return this.url.concat('/get').concat(imgUrl)
  }
}
