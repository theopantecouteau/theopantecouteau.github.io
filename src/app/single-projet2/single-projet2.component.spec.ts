import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProjet2Component } from './single-projet2.component';

describe('SingleProjet2Component', () => {
  let component: SingleProjet2Component;
  let fixture: ComponentFixture<SingleProjet2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleProjet2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleProjet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
