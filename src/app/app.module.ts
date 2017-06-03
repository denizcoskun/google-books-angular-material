import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdToolbarModule, MdInputModule, 
         MdCardModule, MdProgressSpinnerModule, MdTabsModule,
         MdGridListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ExploreBooksComponent } from './explore-books/explore-books.component';
import { MyLibraryComponent } from './my-library/my-library.component';
import { BooksService } from './services/books.service';
import { BookListComponent } from './book-list/book-list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';


import { BookEffects } from './effects/book';
import { reducer } from './reducers/reducers';

const appRoutes: Routes = [
  {path: '', component: ExploreBooksComponent},
  {path: 'explore', component: ExploreBooksComponent},
  {path: 'library', component: MyLibraryComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ExploreBooksComponent,
    MyLibraryComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    StoreModule.provideStore(reducer),
    EffectsModule.run(BookEffects),
    RouterModule.forRoot(appRoutes),
    FlexLayoutModule,
    MdButtonModule, MdToolbarModule, MdInputModule,
    MdCardModule, MdProgressSpinnerModule, MdTabsModule,
    MdGridListModule
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
