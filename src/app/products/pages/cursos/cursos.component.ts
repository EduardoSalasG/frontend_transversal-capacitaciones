import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../../components/footer/footer.component';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { FilterComponent } from '../../components/filter/filter.component';
import { BannerComponent } from '../../../components/banner/banner.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';


interface categorias {
  nombre: String,
  subcategorias: String[]
}

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [CommonModule, FooterComponent, NavbarComponent, FilterComponent, BannerComponent, RouterModule],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css',
})
export default class CursosComponent implements OnInit {

  public categoriasArray: categorias[] = [
    {
      nombre: 'Salud',
      subcategorias: ['Primeros auxilios', 'Kinesiología', 'Instrumentación quirúrgica']
    }
  ]


  constructor(private router: Router) {
    console.log(this.router.url);

  }
  private activatedRoute = inject(ActivatedRoute)
  title = "Todos los cursos";
  producto = false;
  productoId = 0;


  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(params => {
    //   this.productoId = params["id"]
    // })


  }



}
