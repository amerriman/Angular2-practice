import { Component, OnInit } from '@angular/core';
import { IBook } from '../book';
import { BookService } from '../book.service';

@Component({
  moduleId: module.id,
  //only need to use selectors in a component when it's nested inside another component
  // selector: 'bs-books-list',
  // can also write a template here, would need to use backticks instead of the quotes
  templateUrl: 'books-list.component.html'
})

export class BooksListComponent implements OnInit {

  books: IBook[];
  favoriteMessage: string = '';
  imageWidth: number = 100;
  showImage: boolean = true;
  booksInStock: number = 2;
  errorMessage: string;

  constructor(private _bookService: BookService) { }

  ngOnInit() { this.getBooks() }

  getBooks() {
    this._bookService.getBooks()
      .subscribe(
        books => this.books = books,
        error => this.errorMessage = <any>error
      );
    console.log(this.books, "books???")

  }

  onFavoriteClicked(message: string): void {
    this.favoriteMessage = message;
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

}
