import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipCalculatorComponent } from './tip-calculator.component';

describe('TipCalculatorComponent', () => {
  let component: TipCalculatorComponent;
  let fixture: ComponentFixture<TipCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
