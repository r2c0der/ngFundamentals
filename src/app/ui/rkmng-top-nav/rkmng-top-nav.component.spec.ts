import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RkmNgTopNavComponent } from './rkmng-top-nav.component';

describe('RkmNgTopNavComponent', () => {
  let component: RkmNgTopNavComponent;
  let fixture: ComponentFixture<RkmNgTopNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RkmNgTopNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RkmNgTopNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
