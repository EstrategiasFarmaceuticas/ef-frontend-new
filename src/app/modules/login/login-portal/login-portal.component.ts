import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-portal',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login-portal.component.html',
  styleUrl: './login-portal.component.css'
})
export class LoginPortalComponent {

  loginGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  onSubmit(): void {

  }
}
