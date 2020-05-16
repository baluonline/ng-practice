import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Shopping0editComponent } from './shopping0edit.component';

describe('Shopping0editComponent', () => {
  let component: Shopping0editComponent;
  let fixture: ComponentFixture<Shopping0editComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Shopping0editComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Shopping0editComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
