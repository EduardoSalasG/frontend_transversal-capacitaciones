import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../../components/footer/footer.component';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { FilterComponent } from '../../components/filter/filter.component';
import { BannerComponent } from '../../../components/banner/banner.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [CommonModule, FooterComponent, NavbarComponent, FilterComponent, BannerComponent, RouterModule],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css',
})
export default class CursosComponent implements OnInit {
  private activatedRoute = inject(ActivatedRoute)
  title = "Cursos";
  producto = false;
  productoId = 0;


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.productoId = params["id"]
    })
  }



}
