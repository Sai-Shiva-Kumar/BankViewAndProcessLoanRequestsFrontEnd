import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminlogincomponentComponent } from './adminlogincomponent.component';

describe('AdminlogincomponentComponent', () => {
  let component: AdminlogincomponentComponent;
  let fixture: ComponentFixture<AdminlogincomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminlogincomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminlogincomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
