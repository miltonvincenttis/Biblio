import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InclusaoLiteraturaComponent } from './inclusao-literatura.component';

describe('InclusaoLiteraturaComponent', () => {
  let component: InclusaoLiteraturaComponent;
  let fixture: ComponentFixture<InclusaoLiteraturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InclusaoLiteraturaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InclusaoLiteraturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
