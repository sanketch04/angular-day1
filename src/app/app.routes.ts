import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Employee } from './components/employee/employee';
import { ApiStudent } from './components/api-student/api-student';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'day1', component: Employee },
  { path: 'day2', component: Home },
  { path: 'day3', component: ApiStudent }
];
