import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface categorias {
  nombre: String,
  subcategorias: String[]
}
@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  public subcategorias: String[] = []

  @Input() title: String = ''
  @Input() categoriasArray: categorias[] = [
    {
      nombre: '',
      subcategorias: ['', '']
    },
  ]



  onSelected(value: any): void {
    (value) ? this.subcategorias = this.categoriasArray[value - 1].subcategorias : this.subcategorias = []
    console.log(this.categoriasArray)
    console.log(value)
  }


}
