// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from '../../environments/environments';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private baseUrl: string = environments.baseURL;

  private endpoint = 'http://localhost:4000/graphql';
  constructor(private http: HttpClient) { }


  // createUser(newUser: newUser): Observable<newUser> {
  //   return this.http.post<newUser>(`${this.baseUrl}/usuarios`, newUser);
  // }

}
