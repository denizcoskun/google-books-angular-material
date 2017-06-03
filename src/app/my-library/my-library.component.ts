import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Book } from '../models/book';
import { Store } from '@ngrx/store';

import * as SearchActions from '../actions/search-actions';
import * as fromRoot from '../reducers/reducers';

@Component({
  selector: 'app-my-library',
  templateUrl: './my-library.component.html',
  styleUrls: ['./my-library.component.css']
})
export class MyLibraryComponent implements OnInit {
  results: Observable<Book[]>;

   constructor(private store: Store<fromRoot.State>) {
    this.results = store.select(state => state.search.results);
   }

  ngOnInit() {
  }

}
