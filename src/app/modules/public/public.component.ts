import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NavbarComponent} from '@module/public/components/navbar/navbar.component';
import {FooterComponent} from '@module/public/components/footer/footer.component';
import {BackToTopComponent} from '../../shared/components/back-to-top/back-to-top.component';

@Component({
  selector: 'app-public',
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    BackToTopComponent,
  ],
  templateUrl: './public.component.html'
})
export class PublicComponent {

}
