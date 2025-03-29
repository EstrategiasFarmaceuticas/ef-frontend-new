import { Component } from '@angular/core';
import {DistributorsComponent} from '../../components/distributors/distributors.component';

@Component({
  selector: 'app-about',
  imports: [
    DistributorsComponent
  ],
  templateUrl: './about.component.html'
})
export class AboutComponent {

}
