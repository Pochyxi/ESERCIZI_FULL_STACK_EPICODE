import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingoliInattiviComponent } from './singoli-inattivi.component';

describe('SingoliInattiviComponent', () => {
  let component: SingoliInattiviComponent;
  let fixture: ComponentFixture<SingoliInattiviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingoliInattiviComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingoliInattiviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
