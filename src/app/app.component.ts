import { Component } from '@angular/core';
import {NavbarComponent} from '@module/public/components/navbar/navbar.component';
import {RouterOutlet} from '@angular/router';
import {FooterComponent} from '@module/public/components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Estrategias Farmacéuticas';
}
