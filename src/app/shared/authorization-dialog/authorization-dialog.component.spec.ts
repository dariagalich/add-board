import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizationDialogComponent } from './authorization-dialog.component';

describe('AuthorizationComponent', () => {
  let component: AuthorizationDialogComponent;
  let fixture: ComponentFixture<AuthorizationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorizationDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorizationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
