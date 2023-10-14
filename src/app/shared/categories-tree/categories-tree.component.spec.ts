import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesTreeComponent } from './categories-tree.component';

describe('TreeComponent', () => {
  let component: CategoriesTreeComponent;
  let fixture: ComponentFixture<CategoriesTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesTreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
