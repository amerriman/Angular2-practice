import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router'

import { AppComponent }   from './app.component';
import { BooksListComponent }   from './books/books-list/books-list.component';
import { BookDetailsComponent }   from './books/book-details/book-details.component';
import { BooksHomeComponent }   from './books/books-home/books-home.component';
import { TruncatePipe } from './shared/pipes/truncate.pipe';
import { FavoriteComponent } from './favorites/favorite.component';

import { BookService } from './books/book.service';

@NgModule({
  imports:      [ BrowserModule,
                       FormsModule,
                       HttpModule, RouterModule.forRoot([
                         {path: 'books', component: BooksListComponent},
                         {path: 'home', component: BooksHomeComponent},
                         {path: 'book/:id', component: BookDetailsComponent},
                         { path: '', redirectTo: 'home', pathMatch: 'full'},
                         {path: '**', redirectTo: 'books', pathMatch: 'full'}
                         ])],
  providers: [BookService],
  declarations: [ AppComponent,
                          BooksListComponent, BooksHomeComponent, BookDetailsComponent,
                          TruncatePipe,
                          FavoriteComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
