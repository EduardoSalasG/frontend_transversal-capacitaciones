import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { queryNewPago } from '../graphql-queries';

@Injectable({
  providedIn: 'root'
})
export class MercadoPagoService {
  private endpoint = 'http://localhost:4000/graphql';
  constructor(private http: HttpClient) { }

  newPago(monto: any, rut: any, tipoDt: any,
    usuarioId: any, productoId: any, correo: any, nombre: any): Promise<any> {
    const query = queryNewPago
    const variables = {
      venMonto: monto,
      venRutDt: rut,
      tdtId: parseInt(tipoDt),
      usuId: parseInt(usuarioId),
      proId: parseInt(productoId),
      usuCorreo: correo,
      proNombre: nombre
    };
    const url = `${this.endpoint}`;
    const body = {
      query: query,
      variables: variables,
    };
    return this.http
      .post<any>(url, body)
      .toPromise()
      .then((response) => { response.data.newPagoMercadoPago, console.log(response.data.newPagoMercadoPago) });

  }
}
