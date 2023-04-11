import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancyOfferComponent } from './vacancy-offer.component';

describe('VacancyOfferComponent', () => {
  let component: VacancyOfferComponent;
  let fixture: ComponentFixture<VacancyOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacancyOfferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacancyOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
