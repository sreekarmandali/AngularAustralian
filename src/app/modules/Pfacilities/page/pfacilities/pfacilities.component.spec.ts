import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PfacilitiesComponent } from './pfacilities.component';

describe('PfacilitiesComponent', () => {
  let component: PfacilitiesComponent;
  let fixture: ComponentFixture<PfacilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PfacilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PfacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
