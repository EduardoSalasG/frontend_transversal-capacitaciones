import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { BannerComponent } from '../../../components/banner/banner.component';
import { CarouselComponent } from '../../../products/components/carousel/carousel.component';
import { ValoracionesComponent } from '../../../products/components/valoraciones/valoraciones.component';
import { CursoService } from '../../../service/curso.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CarouselLeadsComponent } from '../../../products/components/carousel-leads/carousel-leads.component';
import { LeadService } from '../../../service/lead.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, BannerComponent, CarouselComponent, ValoracionesComponent,
    RouterLinkActive, RouterLink, CarouselLeadsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export default class HomeComponent implements OnInit {
  cursos: any;
  leads: any;

  constructor(private cursoService: CursoService, private leadService: LeadService) { }

  ngOnInit(): void {
    this.cursoService.result.then((data: any) => {
      this.cursos = data.getCursosProducto;
      console.log(this.cursos)
    })

    this.leadService.result.then((data: any) => {
      this.leads = data.getLeadsProducto;
      console.log(this.leads)
    })
  }
}