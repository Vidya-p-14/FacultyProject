import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewFacultiesComponent } from './components/view-faculties/view-faculties.component';
import { EditFacultyComponent } from './components/edit-faculty/edit-faculty.component';
import { PhdFacultiesComponent } from './components/phd-faculties/phd-faculties.component';

const routes: Routes = [
  { path: 'viewFaculties', component: ViewFacultiesComponent},
  { path: 'editFaculty', component: EditFacultyComponent},
  { path: 'phdFaculties', component: PhdFacultiesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
