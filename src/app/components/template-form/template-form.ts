import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  imports: [FormsModule,NgIf],
  templateUrl: './template-form.html',
  styleUrl: './template-form.css',
})
export class TemplateForm {
  name = '';
  email = '';
  age = 0;

  submitForm(form: NgForm) {
    console.log('FORM VALUE:');
    console.log(form.value);

    console.log('Name:', this.name);
    console.log('Email:', this.email);
    console.log('Age:', this.age);
  }
}
