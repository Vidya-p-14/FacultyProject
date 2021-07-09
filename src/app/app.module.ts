import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FacultyBasedOnLocationComponent } from './ShowFaculties/faculty-based-on-location/faculty-based-on-location.component';
import { ViewFacultiesComponent } from './components/view-faculties/view-faculties.component';
import { EditFacultyComponent } from './components/edit-faculty/edit-faculty.component';
import { PhdFacultiesComponent } from './components/phd-faculties/phd-faculties.component';
import { AddFacultyComponent } from './components/add-faculty/add-faculty.component';

@NgModule({
  declarations: [
    AppComponent,
    FacultyBasedOnLocationComponent,
    ViewFacultiesComponent,
    EditFacultyComponent,
    PhdFacultiesComponent,
    AddFacultyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
