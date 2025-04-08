import { Injectable } from '@angular/core';
import {GeneralVariables} from '../../../modules/generalVariables';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoiesService {

  general = new GeneralVariables(); // dento de este objeto se encuentra la url de la api

  constructor(private http: HttpClient) { }
}
