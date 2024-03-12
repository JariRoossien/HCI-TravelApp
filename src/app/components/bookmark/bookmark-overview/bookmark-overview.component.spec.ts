import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkOverviewComponent } from './bookmark-overview.component';

describe('BookmarkOverviewComponent', () => {
  let component: BookmarkOverviewComponent;
  let fixture: ComponentFixture<BookmarkOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookmarkOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookmarkOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
