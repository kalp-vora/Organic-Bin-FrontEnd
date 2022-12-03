import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyappointmentComponent } from './companyappointment.component';

describe('CompanyappointmentComponent', () => {
  let component: CompanyappointmentComponent;
  let fixture: ComponentFixture<CompanyappointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyappointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyappointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
