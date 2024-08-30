import { Observable } from "rxjs";

const welcomeObservable$ = new Observable((observer) => {
  console.log("In Observable producer fn");

  observer.next("Welcome!");
  observer.next("World");
  observer.complete(); // stops emitting values once the complete() method is called
});

console.log("Before calling the subscribe method");

welcomeObservable$.subscribe(console.log);

