import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptElementComponent } from './javascript-element.component';

describe('JavascriptElementComponent', () => {
  let component: JavascriptElementComponent;
  let fixture: ComponentFixture<JavascriptElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavascriptElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JavascriptElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
