import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lead } from '../models/lead';
@Injectable({
  providedIn: 'root'
})
export class LeadService {
  url = 'http://localhost:4000/api/leads/';

  constructor(private http: HttpClient) { }

  getLeads(): Observable<any> {
    return this.http.get(this.url);
  }

  eliminarLead(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarLead(lead: Lead): Observable<any> {
    return this.http.post(this.url, lead);
  }

  obtenerLead(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }
  editarLead(id:string,lead:Lead):Observable<any>{
    return this.http.put(this.url + id,lead)
  }
}
