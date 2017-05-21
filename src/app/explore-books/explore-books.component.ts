import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Book } from '../models/book';
import { BooksService } from '../services/books.service';
@Component({
  selector: 'app-explore-books',
  templateUrl: './explore-books.component.html',
  styleUrls: ['./explore-books.component.css']
})
export class ExploreBooksComponent implements OnInit {
  
  @ViewChild('input') input: ElementRef;
  loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  results: Book[];

  constructor(private books: BooksService) { }

  ngOnInit() {

    Observable.fromEvent(this.input.nativeElement, 'keyup')
          .map((e: any) => e.target.value)
          .filter((text: string) => text.length > 1)
          .debounceTime(250)
          .do((log) => {this.loading.next(true); console.log(log)})
          .map((query: string) => this.books.search(query))
          .switch()
          .subscribe((results: Book[] ) => {
            this.loading.next(false);
            this.results = results;
            console.log(this.results);
          }, 
            (error: any) => {
              this.loading.next(false);
            }
          ,() => {
            this.loading.next(false);
          }
        );

  }
  
  
  
}
