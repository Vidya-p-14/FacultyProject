import { Component, Input, OnInit } from '@angular/core';
import { Faculty } from '../../faculty';
import { FacultyService } from 'src/app/services/faculty.service';

@Component({
  selector: 'app-faculty-based-on-location',
  templateUrl: './faculty-based-on-location.component.html',
  styleUrls: ['./faculty-based-on-location.component.css']
})
export class FacultyBasedOnLocationComponent implements OnInit {
  faculties: Faculty[] = [];
  @Input() displayFaculties!: Faculty[];
  public recordFound: boolean = true;
  location!: String;

  facultyOnLocation() {
    this.displayFaculties = [];
    this.recordFound = this.faculties.some(faculty => (faculty.workLocation === this.location));
    if (this.recordFound) {
      this.displayFaculties = this.faculties.filter(faculty => (faculty.workLocation === this.location));
      console.log(this.displayFaculties);
    }
    else {
      console.log("No record found.");
    }
    console.log("facultyOnLocation() method called.")
  }

  constructor(private facultyService: FacultyService) { }

  ngOnInit(): void {
    this.facultyService.getFaculties().subscribe(faculties => this.faculties = faculties);
  }
}
