import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardOverviewComponent } from './reward-overview.component';

describe('RewardOverviewComponent', () => {
  let component: RewardOverviewComponent;
  let fixture: ComponentFixture<RewardOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RewardOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RewardOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
