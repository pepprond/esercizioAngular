import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from './model/contact';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private apiUrl = 'http://localhost:3002/';
  constructor(private http: HttpClient) {}
  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.apiUrl + 'getContacts/');
  }
  deleteContact(id: number): Observable<void> {
    return this.http.delete<void>(this.apiUrl + 'deleteContact/' + id);
  }
  getDettaglio(id: string): Observable<Contact> {
    return this.http.get<Contact>(this.apiUrl + '/getDettaglio/' + id);
  }
}
