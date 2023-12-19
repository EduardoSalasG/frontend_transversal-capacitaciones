import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { VentasService } from '../../../service/ventas.service';

export interface Compras {
  Producto: Producto;
  VEN_MONTO: number;
  VEN_ID: string;
  VEN_RUT_DT: string;
  TipoDt: TipoDt;
  updatedAt: string;
}

export interface Producto {
  PRO_NOMBRE: string;
  PRO_ID: string;
}

export interface TipoDt {
  TDT_NOMBRE: string;
}

@Component({
  selector: 'app-list-orders',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './list-orders.component.html',
  styleUrl: './list-orders.component.css'
})
export default class ListOrdersComponent implements OnInit {
  public showContent = false;
  placeholders: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  constructor(private ventasService: VentasService) { }

  ngOnInit(): void {
    //TODO: Leer id desde navbar
    this.ventasService.getVentasByUserId(1)
      .then((data) => {
        this.compras = data;
        console.log(this.compras)
      })

    setTimeout(() => {
      this.showContent = true
    }, 4500);

  }
  public compras: Compras[] = []


}

