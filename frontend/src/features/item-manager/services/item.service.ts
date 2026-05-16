import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models';
import { Item, ItemRequest } from '../models';
import { environment } from '../../../core/environments';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}/categories`);
  }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.apiUrl}/items`);
  }

  saveItem(item: ItemRequest): Observable<Item> {
    return this.http.post<Item>(`${this.apiUrl}/items`, item);
  }
}
