"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var welcomeObservable$ = new rxjs_1.Observable(function (observer) {
    console.log("In Observable producer fn");
    observer.next("Welcome!");
    observer.next("World");
    observer.complete();
});
console.log("Before calling the subscribe method");
welcomeObservable$.subscribe(console.log);
