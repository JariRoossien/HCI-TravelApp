import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardListItemComponent } from './reward-list-item.component';

describe('RewardListItemComponent', () => {
  let component: RewardListItemComponent;
  let fixture: ComponentFixture<RewardListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RewardListItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RewardListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
