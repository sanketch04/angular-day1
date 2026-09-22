import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Home } from './components/home/home';
import { Employee } from './components/employee/employee';

@Component({
  selector: 'app-root',
  imports: [Header, Home, Employee],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-day1');
}
