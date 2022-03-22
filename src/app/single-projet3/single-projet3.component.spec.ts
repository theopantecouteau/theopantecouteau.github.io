import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProjet3Component } from './single-projet3.component';

describe('SingleProjet3Component', () => {
  let component: SingleProjet3Component;
  let fixture: ComponentFixture<SingleProjet3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleProjet3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleProjet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
