import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../../components/footer/footer.component';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { BannerComponent } from '../../../components/banner/banner.component';
import { FilterLeadsComponent } from '../../components/filter-leads/filter-leads.component';
import { RouterModule } from '@angular/router';
import { LeadService } from '../../../service/lead.service';
import { CarouselLeadsComponent } from '../../components/carousel-leads/carousel-leads.component';
import { CardsLeadsComponent } from '../../components/cards-leads/cards-leads.component';


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
  imports: [CommonModule, FooterComponent, NavbarComponent, BannerComponent,
    FilterLeadsComponent, RouterModule, CarouselLeadsComponent, CardsLeadsComponent],
  templateUrl: './leads.component.html',
  styleUrl: './leads.component.css'
})
export default class LeadsComponent implements OnInit {
  leads: any[] = [];
  cantidadItems: any = 3

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
  constructor(private leadService: LeadService) { }

  title = 'Todos los leads'
  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(params => {
    //   this.productoId = params["id"]
    // })

    setTimeout(() => {
      this.leadService.result.then((data: any) => {
        this.leads = data.getLeadsProducto;
      })

    }, 3000)

  }

}
