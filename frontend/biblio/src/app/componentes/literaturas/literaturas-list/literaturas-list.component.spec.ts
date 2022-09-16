import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteraturasListComponent } from './literaturas-list.component';

describe('LiteraturasListComponent', () => {
  let component: LiteraturasListComponent;
  let fixture: ComponentFixture<LiteraturasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiteraturasListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiteraturasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
