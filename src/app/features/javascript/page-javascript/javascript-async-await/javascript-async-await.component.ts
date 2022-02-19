import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-javascript-async-await',
  templateUrl: './javascript-async-await.component.html',
  styleUrls: ['./javascript-async-await.component.scss']
})
export class JavascriptAsyncAwaitComponent implements OnInit {
  asyncValue = '';

  constructor() { }

  ngOnInit(): void {
  }

  asyncAwait() {
    const promise = fetch('https://jsonplaceholder.typicode.com/todos/1');

    promise.then(res => res.json())
      .then(user => console.log('Async User title:', user.title))

    console.log('Sync');
  }

  getValue = async() => {
    const promise = await fetch('http://jsonplaceholder.typicode.com/todos/2');
    console.log(promise);
    const promiseJSON = await promise.json();
    console.log(promiseJSON);
    this.asyncValue = promiseJSON.title;
    console.log('After call');
  }
}
