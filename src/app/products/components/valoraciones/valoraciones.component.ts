import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();
@Component({
  selector: 'app-valoraciones',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './valoraciones.component.html',
  styleUrl: './valoraciones.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ValoracionesComponent {

}
