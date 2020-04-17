import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Routing } from './routes';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  routing: Routing;

  constructor(private http: HttpClient) {
    this.routing = new Routing();
  }

  getStudents() {
    return this.http.get(this.routing.urlStudent);
  }

  postStudent(student: Student) {
    return this.http.post(this.routing.urlStudent, student);
  }

  getStudentsByStudies(studies: string) {
    return this.http.get(this.routing.urlStudent + "/" + studies);
  }

  deleteStudent(id: string) {
    return this.http.delete(this.routing.urlStudent + `/${id}`);
  }
}