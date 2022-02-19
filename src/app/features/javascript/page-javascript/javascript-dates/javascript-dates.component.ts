import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-javascript-dates',
  templateUrl: './javascript-dates.component.html',
  styleUrls: ['./javascript-dates.component.scss']
})
export class JavascriptDatesComponent implements OnInit {
  currentDate?: Date;

  constructor() { }

  ngOnInit(): void {
  }

  getCurrentDate() {
    this.currentDate = new Date();
  }

}
