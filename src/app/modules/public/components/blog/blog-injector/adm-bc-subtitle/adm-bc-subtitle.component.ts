import {Component, input} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-adm-bc-subtitle',
  imports: [
    FormsModule
  ],
  templateUrl: './adm-bc-subtitle.component.html',
  styleUrl: './adm-bc-subtitle.component.css'
})
export class AdmBcSubtitleComponent {
  data = input.required<string>()
}
