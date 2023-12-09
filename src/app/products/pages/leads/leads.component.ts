import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../../components/footer/footer.component';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { BannerComponent } from '../../../components/banner/banner.component';
import { FilterComponent } from '../../components/filter/filter.component';


interface categorias {
  nombre: String,
  subcategorias: String[]
}
@Component({
  selector: 'app-leads',
  standalone: true,
  imports: [CommonModule, FooterComponent, NavbarComponent, BannerComponent, FilterComponent],
  templateUrl: './leads.component.html',
  styleUrl: './leads.component.css'
})
export default class LeadsComponent {

  public categoriasArray: categorias[] = [
    {
      nombre: 'IT',
      subcategorias: ['Programación', 'Excel', 'Business Intelligence']
    }
  ]

  title = 'Leads'

}
