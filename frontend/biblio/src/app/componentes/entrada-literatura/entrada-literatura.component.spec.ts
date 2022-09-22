import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaLiteraturaComponent } from './entrada-literatura.component';

describe('EntradaLiteraturaComponent', () => {
  let component: EntradaLiteraturaComponent;
  let fixture: ComponentFixture<EntradaLiteraturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntradaLiteraturaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntradaLiteraturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
