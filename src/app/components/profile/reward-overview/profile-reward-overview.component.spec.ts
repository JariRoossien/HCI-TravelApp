import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileRewardOverviewComponent } from './profile-reward-overview.component';

describe('RewardOverviewComponent', () => {
  let component: ProfileRewardOverviewComponent;
  let fixture: ComponentFixture<ProfileRewardOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileRewardOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileRewardOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
