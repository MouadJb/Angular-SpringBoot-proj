import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerCreateComponent } from './employer-create.component';

describe('EmployerCreateComponent', () => {
  let component: EmployerCreateComponent;
  let fixture: ComponentFixture<EmployerCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployerCreateComponent]
    });
    fixture = TestBed.createComponent(EmployerCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
