import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProjet1Component } from './single-projet1.component';

describe('SingleProjet1Component', () => {
  let component: SingleProjet1Component;
  let fixture: ComponentFixture<SingleProjet1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleProjet1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleProjet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
