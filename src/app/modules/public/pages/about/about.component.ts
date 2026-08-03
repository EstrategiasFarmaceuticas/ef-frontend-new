import { Component } from '@angular/core';
import {DistributorsComponent} from '@module/public/components/distributors/distributors.component';
import {ScrollRevealDirective} from '@core/directives/scroll-reveal.directive';

@Component({
  selector: 'app-about',
  imports: [
    DistributorsComponent,
    ScrollRevealDirective,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about-style.css',
})
export class AboutComponent {

}
