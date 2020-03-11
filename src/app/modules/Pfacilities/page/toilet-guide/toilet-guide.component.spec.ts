import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToiletGuideComponent } from './toilet-guide.component';

describe('ToiletGuideComponent', () => {
  let component: ToiletGuideComponent;
  let fixture: ComponentFixture<ToiletGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToiletGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToiletGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
