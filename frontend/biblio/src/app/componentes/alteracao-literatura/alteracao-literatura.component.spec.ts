import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlteracaoLiteraturaComponent } from './alteracao-literatura.component';

describe('AlteracaoLiteraturaComponent', () => {
  let component: AlteracaoLiteraturaComponent;
  let fixture: ComponentFixture<AlteracaoLiteraturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlteracaoLiteraturaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlteracaoLiteraturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
