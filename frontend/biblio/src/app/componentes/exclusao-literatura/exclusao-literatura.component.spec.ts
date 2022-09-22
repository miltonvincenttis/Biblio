import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExclusaoLiteraturaComponent } from './exclusao-literatura.component';

describe('ExclusaoLiteraturaComponent', () => {
  let component: ExclusaoLiteraturaComponent;
  let fixture: ComponentFixture<ExclusaoLiteraturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExclusaoLiteraturaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExclusaoLiteraturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
