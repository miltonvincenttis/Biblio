import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaidaLiteraturaComponent } from './saida-literatura.component';

describe('SaidaLiteraturaComponent', () => {
  let component: SaidaLiteraturaComponent;
  let fixture: ComponentFixture<SaidaLiteraturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaidaLiteraturaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaidaLiteraturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
