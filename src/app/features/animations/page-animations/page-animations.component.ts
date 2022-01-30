import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-page-animations',
  templateUrl: './page-animations.component.html',
  styleUrls: ['./page-animations.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.8,
        backgroundColor: 'blue'
      })),
      transition('open => closed', [
        animate(1000)
      ]),
      transition('closed => open', [
        animate(500)
      ]),
    ]),
  ],
})
export class PageAnimationsComponent implements OnInit {
isOpen = true;
  constructor() {
  }

  ngOnInit(): void {
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

}
