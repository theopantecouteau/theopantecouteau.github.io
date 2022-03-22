import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProjet4Component } from './single-projet4.component';

describe('SingleProjet4Component', () => {
  let component: SingleProjet4Component;
  let fixture: ComponentFixture<SingleProjet4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleProjet4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleProjet4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
