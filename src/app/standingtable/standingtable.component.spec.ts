import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandingtableComponent } from './standingtable.component';

describe('StandingtableComponent', () => {
  let component: StandingtableComponent;
  let fixture: ComponentFixture<StandingtableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StandingtableComponent]
    });
    fixture = TestBed.createComponent(StandingtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
