import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestioneHomeComponent } from './gestione-home.component';

describe('GestioneHomeComponent', () => {
  let component: GestioneHomeComponent;
  let fixture: ComponentFixture<GestioneHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestioneHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestioneHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
