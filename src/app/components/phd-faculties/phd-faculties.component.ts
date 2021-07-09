import { Component, OnInit } from '@angular/core';
import { Faculty } from 'src/app/faculty';
import { FacultyService } from 'src/app/services/faculty.service';

@Component({
  selector: 'app-phd-faculties',
  templateUrl: './phd-faculties.component.html',
  styleUrls: ['./phd-faculties.component.css']
})
export class PhdFacultiesComponent implements OnInit {
  faculties: Faculty[] = [];
  count!: number;
  constructor(private facultyService: FacultyService) {
  }

  ngOnInit(): void {
    this.facultyService.getFaculties().subscribe(faculties => this.faculties = faculties);
  }

  getCount(): number {
    this.count = this.faculties.filter(faculty => faculty.highestQualification == 'Dr').length;
    return this.count;
  }
}
