import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Book } from '../models/book';
import { Observable } from 'rxjs';

@Injectable()
export class BooksService {
  private API_URL = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: Http) { }

  search(query): Observable<Book[]> {
    return this.http.get(`${this.API_URL}?q=${query}`)
    .map(res => res.json().items || []);
  } 

}
