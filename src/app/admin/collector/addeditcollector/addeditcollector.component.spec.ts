import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditcollectorComponent } from './addeditcollector.component';

describe('AddeditcollectorComponent', () => {
  let component: AddeditcollectorComponent;
  let fixture: ComponentFixture<AddeditcollectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddeditcollectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddeditcollectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
