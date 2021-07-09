import { Component, OnInit } from '@angular/core';
import { Faculty } from 'src/app/faculty';
import { FacultyService } from 'src/app/services/faculty.service';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-view-faculties',
  templateUrl: './view-faculties.component.html',
  styleUrls: ['./view-faculties.component.css']
})
export class ViewFacultiesComponent implements OnInit {
  faculties: Faculty[] = [];
  faTimes = faTimes;

  onDelete(faculty: Faculty) {

    console.log("onDelete method called");
    console.log(this.faculties);
    this.facultyService.deleteFaculty(faculty).subscribe(() => this.faculties = this.faculties.filter(f => f.facultyId !== faculty.facultyId));
  }
  constructor(private facultyService: FacultyService) { }

  ngOnInit(): void {
    this.facultyService.getFaculties().subscribe(faculties => this.faculties = faculties);
  }

}
