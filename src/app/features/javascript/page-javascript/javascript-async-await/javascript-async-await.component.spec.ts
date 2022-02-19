import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptAsyncAwaitComponent } from './javascript-async-await.component';

describe('JavascriptAsyncAwaitComponent', () => {
  let component: JavascriptAsyncAwaitComponent;
  let fixture: ComponentFixture<JavascriptAsyncAwaitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavascriptAsyncAwaitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JavascriptAsyncAwaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
