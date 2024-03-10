import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreCardDetailComponent } from './explore-card-detail.component';

describe('ExploreCardDetailComponent', () => {
  let component: ExploreCardDetailComponent;
  let fixture: ComponentFixture<ExploreCardDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExploreCardDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExploreCardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
