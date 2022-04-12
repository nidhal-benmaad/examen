import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AnnonceService {
  constructor(private http: HttpClient) {}
  fetchAnnonce() {
    return this.http.get('http://localhost:3000/annonces');
  }
}
