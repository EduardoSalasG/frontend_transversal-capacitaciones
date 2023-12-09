import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../../service/producto.service';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export default class ProductComponent implements OnInit {

  id: any = 0;
  isCurso: Boolean = true;
  curso: any;

  constructor(private route: ActivatedRoute, private productoService: ProductoService) { }

  // @Input() productoId = 0

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id']
    })
    this.productoService.getCursoById(this.id).then((curso) => {
      this.curso = curso;
      console.log(this.curso);

    })
    if (!this.curso) {
      this.productoService.getCursoById(this.id).then((curso) => {
        this.curso = curso;
        console.log(this.curso);

      })
    }

  }
}


