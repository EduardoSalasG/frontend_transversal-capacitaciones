import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getVentasByUserId } from '../graphql-queries';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  constructor(private http: HttpClient) { }


  private endpoint = 'http://localhost:4000/graphql';


  getVentasByUserId(id: number): Promise<any> {
    const query = getVentasByUserId;
    const variables = {
      usuId: id.toString(),
    };

    const url = `${this.endpoint}?query=${encodeURIComponent(query)}&variables=${encodeURIComponent(JSON.stringify(variables))}`;

    console.log(url)

    return this.http
      .get<any>(url)
      .toPromise()
      .then((response) => {
        console.log(response)
        return response.data.getVentasByUserId
      });
  }

}
