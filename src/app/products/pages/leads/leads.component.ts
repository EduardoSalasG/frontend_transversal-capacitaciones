import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../../components/footer/footer.component';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { BannerComponent } from '../../../components/banner/banner.component';
import { FilterLeadsComponent } from '../../components/filter-leads/filter-leads.component';


export interface Categorias {
  CLE_ID: string;
  CLE_NOMBRE: string;
  Subcategorias: Subcategoria[];
}

export interface Subcategoria {
  SLE_ID: string;
  SLE_NOMBRE: string;
}

@Component({
  selector: 'app-leads',
  standalone: true,
  imports: [CommonModule, FooterComponent, NavbarComponent, BannerComponent, FilterLeadsComponent],
  templateUrl: './leads.component.html',
  styleUrl: './leads.component.css'
})
export default class LeadsComponent {

  public categoriasArray: Categorias[] = [
    {
      "CLE_ID": "1",
      "CLE_NOMBRE": "Administración pública",
      "Subcategorias": [
        {
          "SLE_ID": "1",
          "SLE_NOMBRE": "Administración pública"
        }
      ]
    },
    {
      "CLE_ID": "2",
      "CLE_NOMBRE": "Arquitectura, inmobiliaria y construcción",
      "Subcategorias": [
        {
          "SLE_ID": "2",
          "SLE_NOMBRE": "Cuerpos de seguridad"
        }
      ]
    },
    {
      "CLE_ID": "3",
      "CLE_NOMBRE": "Calidad, producción, investigación y desarrollo",
      "Subcategorias": [
        {
          "SLE_ID": "3",
          "SLE_NOMBRE": "Fuerzas"
        }
      ]
    }
  ]

  title = 'Todos los leads'

}
