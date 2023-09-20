import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdCreateEditComponent } from './ad-create-edit.component';

describe('AdCreateEditComponent', () => {
  let component: AdCreateEditComponent;
  let fixture: ComponentFixture<AdCreateEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdCreateEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdCreateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
