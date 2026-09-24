import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiStudent } from './api-student';

describe('ApiStudent', () => {
  let component: ApiStudent;
  let fixture: ComponentFixture<ApiStudent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiStudent],
    }).compileComponents();

    fixture = TestBed.createComponent(ApiStudent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
