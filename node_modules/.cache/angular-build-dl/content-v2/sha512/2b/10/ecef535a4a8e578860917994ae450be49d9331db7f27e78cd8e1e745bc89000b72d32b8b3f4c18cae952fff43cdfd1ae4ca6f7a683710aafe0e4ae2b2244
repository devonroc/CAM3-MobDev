(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["quotes-quotes-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quotes/quotes.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quotes/quotes.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--   Title:  Week9 (Ap 13- Ap 19)\n      Author: Mikhail Timofeev\n     Date: 14/April/2020\n     Availability: https://drive.google.com/file/d/1DtBAlEWYf28XwlT0eEHIsYc8D0DKLz3Q/view?usp=sharing\n-->\n\n<!-- HTML code for Quotes web page-->\n\n<ion-header>\n\t<!-- Tool bar with the title of the web page-->\n\t<ion-toolbar color=\"primary\">\n\t\t<ion-title>Breaking Bad Quotes</ion-title>\n\t\t<ion-searchbar placeholder=\"Search Quotes\" animated (ionChange)=\"searchQuote($event)\">\n\t\t</ion-searchbar>\n\t</ion-toolbar>\n</ion-header>\n\n<!-- Content of the web page, here is shown a list of the\nquotes it includes a fuction onclick that opens a second page with the details about the \n selected quote,  the attributes quote and author are taken from the API https://www.breakingbadapi.com/  -->\n\n<!-- *ngForIt to iterate data within array datatype-->\n<!-- async works only with observable variables, it used usually to charge async data from APIS-->\n<!-- The pipe filter is used to do the search fuction -->\n\n<ion-content>\n\t<ion-list>\n\t\t<ion-card button detail lines=\"inset\" *ngFor=\"let quote of quotes | async | filter: mySearch\"\n\t\t\t(click)=\"openDetails(quote)\">\n\t\t\t<ion-card-title>\n\t\t\t\t<ion-icon name=\"bookmark-outline\"></ion-icon>\n\t\t\t\t{{ quote.quote }}\n\t\t\t</ion-card-title>\n\n\t\t\t<ion-card-content>\n\t\t\t\t{{ quote.author}}\n\t\t\t</ion-card-content>\n\t\t</ion-card>\n\t</ion-list>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/quotes/quotes-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/quotes/quotes-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: QuotesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotesPageRoutingModule", function() { return QuotesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _quotes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quotes.page */ "./src/app/pages/quotes/quotes.page.ts");




const routes = [
    {
        path: '',
        component: _quotes_page__WEBPACK_IMPORTED_MODULE_3__["QuotesPage"]
    }
];
let QuotesPageRoutingModule = class QuotesPageRoutingModule {
};
QuotesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], QuotesPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/quotes/quotes.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/quotes/quotes.module.ts ***!
  \***********************************************/
/*! exports provided: QuotesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotesPageModule", function() { return QuotesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _quotes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quotes-routing.module */ "./src/app/pages/quotes/quotes-routing.module.ts");
/* harmony import */ var _quotes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quotes.page */ "./src/app/pages/quotes/quotes.page.ts");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");








let QuotesPageModule = class QuotesPageModule {
};
QuotesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _quotes_routing_module__WEBPACK_IMPORTED_MODULE_5__["QuotesPageRoutingModule"],
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
        ],
        declarations: [_quotes_page__WEBPACK_IMPORTED_MODULE_6__["QuotesPage"]]
    })
], QuotesPageModule);



/***/ }),

/***/ "./src/app/pages/quotes/quotes.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/quotes/quotes.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3F1b3Rlcy9xdW90ZXMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/quotes/quotes.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/quotes/quotes.page.ts ***!
  \*********************************************/
/*! exports provided: QuotesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotesPage", function() { return QuotesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/**  Title: ionic 4+: Search Bar - Módulos - Filtros
*    Author:     Fernando Herrera
*    Date: 18 mar. 2019
*    Availability: https://www.youtube.com/watch?v=T5pdU0s4J6w&t=1994s
**/




let QuotesPage = class QuotesPage {
    constructor(router, api) {
        this.router = router;
        this.api = api;
        //in the array quoteItem the quotes will be stored in a new array
        this.quoteItem = [];
        //mySearch is the variable where the input from the user will be stored when a search is being done
        this.mySearch = '';
    }
    ngOnInit() {
        this.loadQuotes();
        //initialize loadDeaths Method
        // this.quotes = this.api.getQuotes();
        // this.quotes.subscribe(data => {console.log('my data' , data);
        // });
    }
    //The method will call the elements from the getCharacters method declared in 
    //the api service and will store these elements in an array called quoteItem
    loadQuotes() {
        this.quotes = this.api.getQuotes();
        this.quotes.subscribe(data => {
            this.quoteItem = [data];
            //console.log( data); 
        });
    }
    //In this method the attribute event will be taken to start the search
    // according with what is written by the user in the search 
    searchQuote(event) {
        const text = event.target.value;
        this.mySearch = text;
        //return(text.toLowerCase().indexOf(text.toLowerCase())>-1);
        //show the results in the console
        // console.log(text);
    }
    //Method to go to the details page of the quote selected by the user with a click
    openDetails(quotes) {
        let quotesId = quotes.quote_id;
        this.router.navigateByUrl(`/tabs/quotes/${quotesId}`);
    }
};
QuotesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
QuotesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quotes',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quotes.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quotes/quotes.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./quotes.page.scss */ "./src/app/pages/quotes/quotes.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
], QuotesPage);



/***/ })

}]);
//# sourceMappingURL=quotes-quotes-module-es2015.js.map