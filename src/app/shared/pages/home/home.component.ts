import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { BannerComponent } from '../../../components/banner/banner.component';
import { CarouselComponent } from '../../../products/components/carousel/carousel.component';
import { ValoracionesComponent } from '../../../products/components/valoraciones/valoraciones.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, BannerComponent, CarouselComponent, ValoracionesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent {


}
