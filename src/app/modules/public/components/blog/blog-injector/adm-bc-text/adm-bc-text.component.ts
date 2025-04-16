import {Component, ElementRef, input, output, ViewChild} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-adm-bc-text',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './adm-bc-text.component.html',
  styleUrl: './adm-bc-text.component.css'
})
export class AdmBcTextComponent {
  data = input.required<string>()
}
