import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationComponent } from './recommendation.component';

describe('CatalogComponent', () => {
  let component: RecommendationComponent;
  let fixture: ComponentFixture<RecommendationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommendationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
