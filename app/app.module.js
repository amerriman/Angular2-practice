"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var books_list_component_1 = require("./books/books-list/books-list.component");
var book_details_component_1 = require("./books/book-details/book-details.component");
var books_home_component_1 = require("./books/books-home/books-home.component");
var truncate_pipe_1 = require("./shared/pipes/truncate.pipe");
var favorite_component_1 = require("./favorites/favorite.component");
var book_service_1 = require("./books/book.service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule, router_1.RouterModule.forRoot([
                    { path: 'books', component: books_list_component_1.BooksListComponent },
                    { path: 'home', component: books_home_component_1.BooksHomeComponent },
                    { path: 'book/:id', component: book_details_component_1.BookDetailsComponent },
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: '**', redirectTo: 'books', pathMatch: 'full' }
                ])],
            providers: [book_service_1.BookService],
            declarations: [app_component_1.AppComponent,
                books_list_component_1.BooksListComponent, books_home_component_1.BooksHomeComponent, book_details_component_1.BookDetailsComponent,
                truncate_pipe_1.TruncatePipe,
                favorite_component_1.FavoriteComponent],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map