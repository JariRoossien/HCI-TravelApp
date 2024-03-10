import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreCategoryItemComponent } from './explore-category-item.component';

describe('ExploreCategoryItemComponent', () => {
  let component: ExploreCategoryItemComponent;
  let fixture: ComponentFixture<ExploreCategoryItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExploreCategoryItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExploreCategoryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
