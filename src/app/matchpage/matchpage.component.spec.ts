import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchpageComponent } from './matchpage.component';

describe('MatchpageComponent', () => {
  let component: MatchpageComponent;
  let fixture: ComponentFixture<MatchpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatchpageComponent]
    });
    fixture = TestBed.createComponent(MatchpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
