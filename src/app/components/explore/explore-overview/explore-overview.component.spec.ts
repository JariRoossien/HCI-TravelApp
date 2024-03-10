import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreOverviewComponent } from './explore-overview.component';

describe('ExploreOverviewComponent', () => {
  let component: ExploreOverviewComponent;
  let fixture: ComponentFixture<ExploreOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExploreOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExploreOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
