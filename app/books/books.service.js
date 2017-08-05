"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var BookService = (function () {
    function BookService() {
    }
    BookService.prototype.getBooks = function () {
        return [{
                bookAuthor: "Tom Jones",
                bookTitle: "War and Peace 2",
                bookPrice: 29.95,
                bookDescription: "Book of historical fiction",
                publishedOn: new Date('02/11/1921'),
                inStock: "yes",
                bookReviews: 15,
                bookImageUrl: "app/assets/images/656.jpg"
            }, {
                bookAuthor: "Mike Jones",
                bookTitle: "War and Peace 3",
                bookPrice: 19.95,
                bookDescription: "Book of historical fact",
                publishedOn: new Date('02/11/1921'),
                inStock: "yes",
                bookReviews: 18,
                bookImageUrl: "app/assets/images/656.jpg"
            }];
    };
    BookService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], BookService);
    return BookService;
}());
exports.BookService = BookService;
//# sourceMappingURL=books.service.js.map