import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptDatesComponent } from './javascript-dates.component';

describe('JavascriptDatesComponent', () => {
  let component: JavascriptDatesComponent;
  let fixture: ComponentFixture<JavascriptDatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavascriptDatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JavascriptDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
