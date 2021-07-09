import { Component, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Faculty } from './faculty';
import { FacultyService } from './services/faculty.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'fifthProject';
  displayFaculties: Faculty[] = [];
  faculties!: Faculty[];
  showform: boolean = false;
  exform!: FormGroup;

  constructor(private router: Router, private facultyService: FacultyService) { }

  ngOnInit(): void {
    this.router.navigate(['']);
    this.facultyService.getFaculties().subscribe(faculties => this.faculties = faculties);
    this.exform = new FormGroup({
      'facultyName': new FormControl(null, Validators.required),
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

  addFaculty() {
    this.showform = !this.showform;
  }

  onSubmit() {
    const newFaculty: Faculty = {
      facultyName: this.facultyName?.value,
      facultyMobile: this.facultyMobile?.value,
      facultyEmail: this.facultyEmail?.value,
      highestQualification: this.highestQualification?.value,
      workLocation: this.workLocation?.value
    }
    this.facultyService.addFaculty(newFaculty).subscribe(faculty => this.faculties.push(faculty));
    this.exform.reset();
  }

  get facultyName() {
    return this.exform.get('facultyName');
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
