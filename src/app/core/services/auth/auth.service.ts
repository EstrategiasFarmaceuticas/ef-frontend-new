import { Injectable } from '@angular/core';
import {SsrCookieService} from 'ngx-cookie-service-ssr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private cookieService: SsrCookieService
  ) { }
}
