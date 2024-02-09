import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CustomersComponent } from '../Components/customers/customers.component';
import { LoginComponent } from '../Components/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, 
            RouterOutlet,
            CustomersComponent,
            LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'E-Commerce-Tech';
}
