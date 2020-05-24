(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["character-details-character-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/character-details/character-details.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/character-details/character-details.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--   Title:  Week 7: Storing Data inside Ionic Apps\n      Author: Mikhail Timofeev\n     Date: 30/March/2020\n     Availability: https://mikhail-cct.github.io/mobdev/wk7/#/13\n     -->\n\n\n<ion-header>\n\t<ion-toolbar color=\"primary\">\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button defaulthref=\"/tabs/characters\">\n\t\t\t</ion-back-button>\n\n\t\t\t<ion-title>Character Details</ion-title>\n\n<!-- Button with the fuction to mark a character as favourite, by default is false and if click\nthe button will indicate that the character is liked -->\n\t\t\t<ion-button (click)=\"unfavouriteCharacter()\" *ngIf=\"isFavourite\">\n\t\t\t\t<ion-icon name=\"thumbs-down-outline\"></ion-icon>\n\t\t\t</ion-button>\n\n            <!--If the character is marked as favourite and click on this button\n            the character will get marked as unfavourite  -->\n\t\t\t<ion-button (click)=\"favouriteCharacter()\" *ngIf=\"!isFavourite\">\n\t\t\t\t<ion-icon name=\"thumbs-up-outline\"></ion-icon>\n\t\t\t</ion-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n\n<!--Content of the page, it will show the character details as \nNickname, name, birthday, occupation, status and a picture of it, the \n*ngIf indicates that this data will be showed id a character element is found  -->\n<ion-content>\n\t<ion-card>\n\t\t<ion-card-content>\n\t\t\t<ion-list *ngIf=\"character\">\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-avatar>\n\t\t\t\t\t\t<img src=\"{{character.img}}\">\n                          </ion-avatar>\n\t\t\t\t\t\t<h2>{{character.name}}</h2>\n\t\t\t\t</ion-item>\n\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label> Nickname </ion-label>\n\t\t\t\t\t<label> {{character.nickname}}</label>\n\t\t\t\t</ion-item>\n\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label> Birthday </ion-label>\n\t\t\t\t\t<label> {{character.birthday}}</label>\n\t\t\t\t</ion-item>\n\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label> Occupation </ion-label>\n\t\t\t\t\t<label> {{character.occupation}}</label>\n\t\t\t\t</ion-item>\n\n\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label> Status </ion-label>\n\t\t\t\t\t<label> {{character.status}}</label>\n\t\t\t\t</ion-item>\n\t\t\t</ion-list>\n\t\t</ion-card-content>\n\t</ion-card>\n</ion-content>\n\n\n");

/***/ }),

/***/ "./src/app/pages/character-details/character-details-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/character-details/character-details-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: CharacterDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterDetailsPageRoutingModule", function() { return CharacterDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _character_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./character-details.page */ "./src/app/pages/character-details/character-details.page.ts");




const routes = [
    {
        path: '',
        component: _character_details_page__WEBPACK_IMPORTED_MODULE_3__["CharacterDetailsPage"]
    }
];
let CharacterDetailsPageRoutingModule = class CharacterDetailsPageRoutingModule {
};
CharacterDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CharacterDetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/character-details/character-details.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/character-details/character-details.module.ts ***!
  \*********************************************************************/
/*! exports provided: CharacterDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterDetailsPageModule", function() { return CharacterDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _character_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./character-details-routing.module */ "./src/app/pages/character-details/character-details-routing.module.ts");
/* harmony import */ var _character_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./character-details.page */ "./src/app/pages/character-details/character-details.page.ts");







let CharacterDetailsPageModule = class CharacterDetailsPageModule {
};
CharacterDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _character_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["CharacterDetailsPageRoutingModule"]
        ],
        declarations: [_character_details_page__WEBPACK_IMPORTED_MODULE_6__["CharacterDetailsPage"]]
    })
], CharacterDetailsPageModule);



/***/ }),

/***/ "./src/app/pages/character-details/character-details.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/character-details/character-details.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoYXJhY3Rlci1kZXRhaWxzL2NoYXJhY3Rlci1kZXRhaWxzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/character-details/character-details.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/character-details/character-details.page.ts ***!
  \*******************************************************************/
/*! exports provided: CharacterDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterDetailsPage", function() { return CharacterDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_favourite_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/favourite.service */ "./src/app/services/favourite.service.ts");
/**  Title:  Week 3: Routing & Navigating with Ionic
*    Author: Mikhail Timofeev
*    Date: 2/March/2020
*    Availability: https://mikhail-cct.github.io/mobdev/wk3/#/
**/





let CharacterDetailsPage = 
//Class where the details of the characters will be loaded
class CharacterDetailsPage {
    constructor(activatedRoute, api, favouriteService) {
        this.activatedRoute = activatedRoute;
        this.api = api;
        this.favouriteService = favouriteService;
        this.characterId = null;
        this.isFavourite = false;
        this.url = 'https://www.breakingbadapi.com/api/characters/';
    }
    ngOnInit() {
        //Assign the Id of the character into the variable characterId
        this.characterId = this.activatedRoute.snapshot.paramMap.get('id');
        //Get the Id and the img from the getCharacter method 
        //declared in the api service  and store the character in an array 
        this.api.getCharacter(this.characterId).subscribe(res => {
            this.character = res[0];
            console.log(JSON.stringify(this.character.char_id));
            this.url = this.character.img;
        });
        //Mark  of the character as favourite
        this.favouriteService.isFavouriteChar(this.characterId).then(isFav => {
            this.isFavourite = isFav;
        });
    }
    //Store the the state of the Character as favourite
    favouriteCharacter() {
        this.favouriteService.favouriteCharacter(this.characterId).then(() => {
            this.isFavourite = true;
        });
    }
    //If the character is marked as unfavourite the state will be stored as false
    unfavouriteCharacter() {
        this.favouriteService.unfavouriteCharacter(this.characterId).then(() => {
            this.isFavourite = false;
        });
    }
};
CharacterDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _services_favourite_service__WEBPACK_IMPORTED_MODULE_4__["FavouriteService"] }
];
CharacterDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-character-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./character-details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/character-details/character-details.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./character-details.page.scss */ "./src/app/pages/character-details/character-details.page.scss")).default]
    })
    //Class where the details of the characters will be loaded
    ,
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _services_favourite_service__WEBPACK_IMPORTED_MODULE_4__["FavouriteService"]])
], CharacterDetailsPage);



/***/ })

}]);
//# sourceMappingURL=character-details-character-details-module-es2015.js.map