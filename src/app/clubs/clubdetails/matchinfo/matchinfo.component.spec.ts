import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchinfoComponent } from './matchinfo.component';

describe('MatchinfoComponent', () => {
  let component: MatchinfoComponent;
  let fixture: ComponentFixture<MatchinfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatchinfoComponent]
    });
    fixture = TestBed.createComponent(MatchinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
