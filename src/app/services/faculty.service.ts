import { Injectable } from '@angular/core';
import { Faculty } from '../faculty';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:5001/FACULTIES';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getFaculties(): Observable<Faculty[]> {
    return this.http.get<Faculty[]>(this.apiUrl);
  }

  deleteFaculty(faculty: Faculty): Observable<Faculty> {
    const url = `${this.apiUrl}/${faculty.facultyId}`;
    return this.http.delete<Faculty>(url);
  }

  addFaculty(faculty: Faculty): Observable<Faculty> {
    return this.http.post<Faculty>(this.apiUrl, faculty, this.httpOptions);
  }

  updateFaculty(faculty: Faculty): Observable<Faculty> {
    const url = `${this.apiUrl}/${faculty.facultyId}`;
    return this.http.put<Faculty>(url, faculty, this.httpOptions);
  }
}
