import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../../components/navbar/navbar.component';

@Component({
  selector: 'app-error404-page',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './error404-page.component.html',
  styleUrl: './error404-page.component.css'
})
export default class Error404PageComponent {

}
