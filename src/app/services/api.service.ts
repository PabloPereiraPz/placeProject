import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // Métodos para lugares
  getLugares(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/lugares`);
  }

  getLugar(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/lugares/${id}`);
  }

  criarLugar(lugar: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/lugares`, lugar);
  }

  atualizarLugar(id: number, lugar: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/lugares/${id}`, lugar);
  }

  deletarLugar(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/lugares/${id}`);
  }

  // Métodos para categorias
  getCategorias(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/categorias`);
  }

  getCategoria(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/categorias/${id}`);
  }

  criarCategoria(categoria: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/categorias`, categoria);
  }

  atualizarCategoria(id: number, categoria: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/categorias/${id}`, categoria);
  }

  deletarCategoria(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/categorias/${id}`);
  }
}