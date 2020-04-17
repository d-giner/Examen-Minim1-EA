import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentsComponent } from './components/students/students.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentService } from 'src/services/StudentService';
import { SubjectService } from 'src/services/SubjectService';
import { HttpClientModule } from '@angular/common/http';
import { LocationsComponent } from './components/locations/locations.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    SubjectsComponent,
    LocationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [StudentService,
    SubjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
