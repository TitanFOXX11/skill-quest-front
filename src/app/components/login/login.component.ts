import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email])
  password = new FormControl('', [Validators.required])
  hide = true; // password hide
  constructor() { }

  ngOnInit(): void {}

  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Tu dois saisir une adresse email';
    }

    return this.email.hasError('email') ? 'Email invalide' : '';
  }

  getPasswordErrorMessage() {
    return this.password.hasError('required') ? 'Tu dois saisir un mot de passe' : '';
  }
}
