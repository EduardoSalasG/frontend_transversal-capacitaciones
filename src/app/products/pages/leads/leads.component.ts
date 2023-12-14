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
import { ProductoService } from '../../../service/producto.service';


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

  public categoriasArray: Categorias[] = []
  constructor(
    private leadService: LeadService,
    private productoService: ProductoService,) { }

  title = 'Todos los leads'
  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(params => {
    //   this.productoId = params["id"]
    // })

    this.productoService.getCategoriasLeads().then((data) => {
      this.categoriasArray = data;
      console.log(this.categoriasArray)
    })


    setTimeout(() => {
      this.leadService.result.then((data: any) => {
        this.leads = data.getLeadsProducto;
      })

    }, 3500)

  }

}
