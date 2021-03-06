import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../models/produto.model';

@Injectable({
  providedIn: 'root',
})
export class ProdutosService {
  private url = environment.PRODUTO_API_BASE_URL;

  constructor(private httpClient: HttpClient) {}

  findAll() {
    return this.httpClient.get<Produto[]>(this.url);
  }

  findById(id: number) {
    return this.httpClient.get<Produto>(`${this.url}/${id}`);
  }

  create(produto: Produto) {
    return this.httpClient.post<Produto>(this.url, produto);
  }

  update(id: number, produto: Produto) {
    return this.httpClient.put<Produto>(`${this.url}/${id}`, produto);
  }

  delete(id: number) {
    return this.httpClient.delete<string>(`${this.url}/${id}`);
  }
}
