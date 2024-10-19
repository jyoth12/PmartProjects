import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private apiUrl = 'http://localhost:3000'; // Your backend API URL

  constructor(private http: HttpClient) {}

  search(query: string, category: string): Observable<any[]> {
    const params = new HttpParams()
      .set('q', query)
      .set('category', category);

    return this.http.get<any[]>(`${this.apiUrl}/products, { params }`);
  }

  getSearchSuggestions(query: string): Observable<string[]> {
    const params = new HttpParams().set('q', query);
    return this.http.get<string[]>(`${this.apiUrl}/api/search-suggestions, { params }`);
  }
}