import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { CapitalizePipe } from '../../pipes/capitalize-pipe';

@Component({
  selector: 'app-home',
  imports: [NgFor, NgIf, CapitalizePipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  employees = [
    {
      name: 'sanket',
      age: 22,
      department: 'IT',
    },
    {
      name: 'rahul',
      age: 24,
      department: 'HR',
    },
    {
      name: 'smit',
      age: 26,
      department: 'Finance',
    },
  ];
  showEmployee = true;
}
