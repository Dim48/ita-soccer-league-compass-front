import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAppComponent } from './admin-app.component';

describe('AdminAppComponent', () => {
  let component: AdminAppComponent;
  let fixture: ComponentFixture<AdminAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAppComponent]
    });
    fixture = TestBed.createComponent(AdminAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
