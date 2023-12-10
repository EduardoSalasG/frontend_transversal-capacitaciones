import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../../components/footer/footer.component';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { BannerComponent } from '../../../components/banner/banner.component';
import { FilterComponent } from '../../components/filter/filter.component';
import { RouterModule } from '@angular/router';
import { LeadService } from '../../../service/lead.service';
import { CarouselLeadsComponent } from '../../components/carousel-leads/carousel-leads.component';
import { CardsLeadsComponent } from '../../components/cards-leads/cards-leads.component';


interface categorias {
  nombre: String,
  subcategorias: String[]
}
@Component({
  selector: 'app-leads',
  standalone: true,
  imports: [CommonModule, FooterComponent, NavbarComponent, BannerComponent,
    FilterComponent, RouterModule, CarouselLeadsComponent, CardsLeadsComponent],
  templateUrl: './leads.component.html',
  styleUrl: './leads.component.css'
})
export default class LeadsComponent implements OnInit {
  leads: any[] = [];
  cantidadItems: any = 3

  public categoriasArray: categorias[] = [
    {
      nombre: 'IT',
      subcategorias: ['Programación', 'Excel', 'Business Intelligence']
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
