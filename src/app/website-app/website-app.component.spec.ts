import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteAppComponent } from './website-app.component';

describe('WebsiteAppComponent', () => {
  let component: WebsiteAppComponent;
  let fixture: ComponentFixture<WebsiteAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebsiteAppComponent]
    });
    fixture = TestBed.createComponent(WebsiteAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
