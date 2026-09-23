import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Highlight } from '../../directives/highlight';

@Component({
  selector: 'app-employee',
  imports: [FormsModule, Highlight],
  templateUrl: './employee.html',
  styleUrl: './employee.css',
})
export class Employee {
  name = '';
  age = 0;
  email = '';
  department = '';

  showMessage() {
    alert('Employee Details Submitted Successfully');
  }
}
