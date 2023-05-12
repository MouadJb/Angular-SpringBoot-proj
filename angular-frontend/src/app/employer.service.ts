import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employer } from './employer';

@Injectable({
  providedIn: 'root'
})
export class EmployerService {



  constructor(private httpClient: HttpClient) { }

  getEmployersList(): Observable<Employer[]>{
    return this.httpClient.get<Employer[]>(`http://localhost:8080/api/v1/employers`);
  }
  creerEmployer(emp: Employer): Observable<Object>{
    return this.httpClient.post(`http://localhost:8080/api/v1/employers`, emp);
  }
  trouverEmployer(id: number): Observable<Employer>{
    return this.httpClient.get<Employer>(`http://localhost:8080/api/v1/employers/${id}`);
  }
  modifierEmployer(id: number, emp: Employer): Observable<Object>{
    return this.httpClient.put(`http://localhost:8080/api/v1/employers/${id}`,emp);
  }
  supprimerEmployer(id: number): Observable<Object>{
    return this.httpClient.delete(`http://localhost:8080/api/v1/employers/${id}`);
  }
}
