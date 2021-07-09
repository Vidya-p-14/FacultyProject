import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhdFacultiesComponent } from './phd-faculties.component';

describe('PhdFacultiesComponent', () => {
  let component: PhdFacultiesComponent;
  let fixture: ComponentFixture<PhdFacultiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhdFacultiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhdFacultiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
