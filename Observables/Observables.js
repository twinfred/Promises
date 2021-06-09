import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

const myObservable = new Observable(observer => {
  setTimeout(() => {
    observer.next('completed task 1');
    observer.next('completed task 2');
  }, 1000);

  setTimeout(() => {
    observer.next('completed task 3');
    observer.next('completed task 4');
  }, 3000);
});

myObservable.subscribe(result => {
  console.log(`Observable ${result}`);
});

myObservable
  .pipe(filter(result => result.includes('3')))
  .subscribe(result => {
    console.log(`Observable ${result}`);
  });