import { Component, OnInit } from '@angular/core';
import { Faculty } from 'src/app/faculty';
import { FacultyService } from 'src/app/services/faculty.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-faculty',
  templateUrl: './edit-faculty.component.html',
  styleUrls: ['./edit-faculty.component.css']
})
export class EditFacultyComponent implements OnInit {
  faculties: Faculty[] = [];
  faculty!: Faculty;
  Id!: number;
  object!: any;
  show: boolean = true;
  toggleEditButton: boolean = false;
  exform!: FormGroup;

  constructor(private facultyService: FacultyService) { }

  ngOnInit(): void {
    this.facultyService.getFaculties().subscribe(faculties => this.faculties = faculties);
    this.exform = new FormGroup({
      'workLocation': new FormControl(null, Validators.required),
      'facultyEmail': new FormControl(null, [Validators.required, Validators.email]),
      'facultyMobile': new FormControl(
        null,
        [
          Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/[0-9]/)
        ]),
      'highestQualification': new FormControl(null, Validators.required)
    });
  }

  searchFaculty() {
    this.object = this.faculties.find(faculty => (Object.values(faculty).indexOf(this.Id) > -1));
    if (!this.object != undefined) {
      this.show = false;
    }
  }

  onSubmit(faculty: Faculty) {

    faculty.facultyMobile = this.facultyMobile?.value,
    faculty.facultyEmail = this.facultyEmail?.value,
    faculty.highestQualification = this.highestQualification?.value,
    faculty.workLocation = this.workLocation?.value

    this.facultyService.updateFaculty(faculty).subscribe();

    this.exform.reset();
  }

  get facultyMobile() {
    return this.exform.get('facultyMobile');
  }
  get facultyEmail() {
    return this.exform.get('facultyEmail');
  }
  get highestQualification() {
    return this.exform.get('highestQualification');
  }
  get workLocation() {
    return this.exform.get('workLocation');
  }
}
