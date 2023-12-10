import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { queryLogin } from '../graphql-queries';
import { Observable } from 'rxjs';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private endpoint = 'http://localhost:4000/graphql';
  constructor(private http: HttpClient) { }

  login(correo: any, pass: any): Promise<any> {
    const query = queryLogin;
    const variables = {
      usuCorreo: correo.toString(),
      usuContrasena: pass.toString()
    };
    const url = `${this.endpoint}`;
    const body = {
      query: query,
      variables: variables,
    };

    return this.http
      .post<any>(url, body)
      .toPromise()
      .then((response) => response.data.login);
  }
}
