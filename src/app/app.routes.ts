import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Employee } from './components/employee/employee';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'day1', component: Employee },
  { path: 'day2', component: Home },
];
