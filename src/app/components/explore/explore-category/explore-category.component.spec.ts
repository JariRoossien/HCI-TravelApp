import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreCategoryComponent } from './explore-category.component';

describe('ExploreCategoryComponent', () => {
  let component: ExploreCategoryComponent;
  let fixture: ComponentFixture<ExploreCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExploreCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExploreCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
