import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLoginFormUiComponent } from './admin-login-form-ui.component';

import {ReactiveFormsModule} from "@angular/forms";

describe('AdminLoginFormUiComponent', () => {
  let component: AdminLoginFormUiComponent;
  let fixture: ComponentFixture<AdminLoginFormUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLoginFormUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLoginFormUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
