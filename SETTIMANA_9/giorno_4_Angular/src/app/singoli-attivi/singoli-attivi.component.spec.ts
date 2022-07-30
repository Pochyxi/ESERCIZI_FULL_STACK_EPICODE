import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingoliAttiviComponent } from './singoli-attivi.component';

describe('SingoliAttiviComponent', () => {
  let component: SingoliAttiviComponent;
  let fixture: ComponentFixture<SingoliAttiviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingoliAttiviComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingoliAttiviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
