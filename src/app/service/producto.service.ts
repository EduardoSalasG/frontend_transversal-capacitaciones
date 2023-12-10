import { Injectable } from '@angular/core';
import { getCurso, getLead } from '../graphql-queries';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private endpoint = 'http://localhost:4000/graphql';



  constructor(private http: HttpClient) { }

  getCursoById(id: number): Promise<any> {
    const query = getCurso;
    const variables = {
      proId: id.toString(),
    };

    const url = `${this.endpoint}?query=${encodeURIComponent(query)}&variables=${encodeURIComponent(JSON.stringify(variables))}`;
    return this.http
      .get<any>(url)
      .toPromise()
      .then((response) => response.data.getCursoProductoById);
  }

  getLeadById(id: number): Promise<any> {
    const query = getLead;
    const variables = {
      proId: id.toString(),
    };

    const url = `${this.endpoint}?query=${encodeURIComponent(query)}&variables=${encodeURIComponent(JSON.stringify(variables))}`;
    return this.http
      .get<any>(url)
      .toPromise()
      .then((response) => response.data.getLeadProductoById);
  }

}




