import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditslotComponent } from './addeditslot.component';

describe('AddeditslotComponent', () => {
  let component: AddeditslotComponent;
  let fixture: ComponentFixture<AddeditslotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddeditslotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddeditslotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
