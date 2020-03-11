import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemReviewComponent } from './problem-review.component';

describe('ProblemReviewComponent', () => {
  let component: ProblemReviewComponent;
  let fixture: ComponentFixture<ProblemReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
