import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../../components/footer/footer.component';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { FilterComponent } from '../../components/filter/filter.component';
import { BannerComponent } from '../../../components/banner/banner.component';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [CommonModule, FooterComponent, NavbarComponent, FilterComponent, BannerComponent],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css',
})
export default class CursosComponent {
  title = "Cursos";
}
