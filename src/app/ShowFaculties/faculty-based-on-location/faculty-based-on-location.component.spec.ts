import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyBasedOnLocationComponent } from './faculty-based-on-location.component';

describe('FacultyBasedOnLocationComponent', () => {
  let component: FacultyBasedOnLocationComponent;
  let fixture: ComponentFixture<FacultyBasedOnLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyBasedOnLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyBasedOnLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
