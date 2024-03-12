import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRewardCardComponent } from './main-reward-card.component';

describe('RewardCardComponent', () => {
  let component: MainRewardCardComponent;
  let fixture: ComponentFixture<MainRewardCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainRewardCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainRewardCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
