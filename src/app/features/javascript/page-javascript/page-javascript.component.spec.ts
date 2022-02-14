import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageJavascriptComponent } from './page-javascript.component';

describe('PageJavascriptComponent', () => {
  let component: PageJavascriptComponent;
  let fixture: ComponentFixture<PageJavascriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageJavascriptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageJavascriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
