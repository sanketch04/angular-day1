import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { strongPasswordValidator } from '../../validators/password-validator';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css',
})
export class ReactiveForm {
  registrationForm = new FormGroup({
    name: new FormControl('', Validators.required),

    email: new FormControl('', [Validators.required, Validators.email]),

    age: new FormControl('', [Validators.required, Validators.min(18)]),
    password: new FormControl('', [Validators.required, strongPasswordValidator]),
  });

  submitForm() {
    console.log('FORM VALUE:');
    console.log(this.registrationForm.value);

    console.log('FORM VALID:');
    console.log(this.registrationForm.valid);
  }
}
