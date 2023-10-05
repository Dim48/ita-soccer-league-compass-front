import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubdetailsComponent } from './clubdetails.component';

describe('ClubdetailsComponent', () => {
  let component: ClubdetailsComponent;
  let fixture: ComponentFixture<ClubdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClubdetailsComponent]
    });
    fixture = TestBed.createComponent(ClubdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
