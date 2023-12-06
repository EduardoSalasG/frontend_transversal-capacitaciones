import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../../components/navbar/navbar.component';

@Component({
  selector: 'app-resenas',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './resenas.component.html',
  styleUrl: './resenas.component.css'
})
export default class ResenasComponent {

}
