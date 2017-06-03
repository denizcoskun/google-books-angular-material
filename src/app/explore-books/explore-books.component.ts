import { Component, OnInit, ViewChild, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Book } from '../models/book';
import { Store } from '@ngrx/store';

import * as SearchActions from '../actions/search-actions';
import * as fromRoot from '../reducers/reducers';

@Component({
  selector: 'app-explore-books',
  templateUrl: './explore-books.component.html',
  styleUrls: ['./explore-books.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExploreBooksComponent implements OnInit {
  
  @ViewChild('input') input: ElementRef;
  loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  results: Observable<Book[]>;
  terms: Observable<string>;
   
  constructor(private store: Store<fromRoot.State>) {
    this.terms = store.select(state => state.search.searchTerms);
    this.results = store.select(state => state.search.results);
   }

  ngOnInit() {

      Observable.fromEvent(this.input.nativeElement, 'keyup')
      .map((e: any) => e.target.value)
      .do((terms) => this.store.dispatch(new SearchActions.SearchAction(terms)))
      .subscribe();
    
  }
  
  
  
}
