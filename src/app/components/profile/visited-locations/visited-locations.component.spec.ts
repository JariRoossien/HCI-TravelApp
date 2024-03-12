import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitedLocationsComponent } from './visited-locations.component';

describe('VisitedLocationsComponent', () => {
  let component: VisitedLocationsComponent;
  let fixture: ComponentFixture<VisitedLocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisitedLocationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisitedLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
