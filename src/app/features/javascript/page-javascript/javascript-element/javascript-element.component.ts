import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-javascript-element',
  templateUrl: './javascript-element.component.html',
  styleUrls: ['./javascript-element.component.scss']
})
export class JavascriptElementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.createElement();
  }

  createElement() {
    const link = document.createElement("a");
    const node = document.createTextNode("This is link");
    link.appendChild(node);
    link.setAttribute("idAttachment","332");

    const element = document.getElementById("elementID");
    // @ts-ignore
    element.appendChild(link);
  }

}
