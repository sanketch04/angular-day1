import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { StudentService } from '../../services/student';

@Component({
  selector: 'app-api-student',
  imports: [NgFor, NgIf],
  templateUrl: './api-student.html',
  styleUrl: './api-student.css'
})
export class ApiStudent {

  students: any[] = [];

  private readonly imageBaseUrl = 'https://localhost:7075';

  constructor(private studentService: StudentService) {}

  ngOnInit() {

    this.studentService.getStudents(1, 10).subscribe({

      next: (data: any) => {

        console.log('API RESPONSE:', data);

        this.students = data.items;

      },

      error: (error: any) => {

        console.error('API ERROR:', error);

      }

    });

  }

  getImageUrl(imagePath: string | null): string {

    if (!imagePath) {
      return '';
    }

    return `${this.imageBaseUrl}${imagePath}`;
  }
}