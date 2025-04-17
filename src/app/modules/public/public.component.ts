import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NavbarComponent} from '@module/public/components/navbar/navbar.component';
import {FooterComponent} from '@module/public/components/footer/footer.component';

@Component({
  selector: 'app-public',
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './public.component.html'
})
export class PublicComponent {

}
