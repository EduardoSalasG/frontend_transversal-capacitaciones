import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../../components/navbar/navbar.component';

@Component({
  selector: 'app-quienes-somos',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './quienes-somos.component.html',
  styleUrl: './quienes-somos.component.css'
})
export default class QuienesSomosComponent {

}
