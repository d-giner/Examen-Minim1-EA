import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Routing } from './routes';
import { Subject } from '../models/Subject';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  routing: Routing;

  constructor(private http: HttpClient) {
    this.routing = new Routing();
  }

  getSubjects(): Observable<Subject[]> {
    return this.http.get<Subject[]>(this.routing.urlSubject);
  }

  getSubjectByName(subjectName: string) {
    return this.http.get(this.routing.urlSubject + `/${subjectName}`);
  }

  postNewSubject(subject: Subject) {
    return this.http.post(this.routing.urlSubject, subject);
  }

  addNewStudentOnSUbject(object: object) {
    return this.http.put(this.routing.urlSubject + "/addStudents", object);
  }

}