import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subject } from 'src/models/Subject';
import { SubjectService } from 'src/services/SubjectService';
import { Student } from 'src/models/student';
import { StudentService } from 'src/services/StudentService';

@Component({
  selector: 'subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css'],

})
export class SubjectsComponent implements OnInit {
  subjects: Subject[];
  mostrarLlistaAssignatures: boolean = false;
  mostrarAlumnesAssignatura: boolean = false;
  subjectName: string;
  subject = new Subject();
  students: Student[];


  myForm1 = new FormGroup({
    subjectname: new FormControl('', Validators.required)
  });

  // Formulari per afegir un alumne a una assignatura
  myForm2 = new FormGroup({
    studentid: new FormControl('', Validators.required),
    subjectname: new FormControl('', Validators.required)
  });

  // Formulari per introduir l'assignatura de la qual volem veure qui la cursa
  myForm3 = new FormGroup({
    subjectname: new FormControl('', Validators.required)
  });


  // Afegir una nova assignatura a la DB
  postNewSubject(values) {
    console.log(values.subjectname);
    this.subject.setName(values.subjectname);
    //this.subject.name = values.subjectname;

    this.subjectService.postNewSubject(this.subject).subscribe(res => {
      console.log(res);
      this.myForm1.reset();
    },
      err => {
        console.log(err);
      });
  }

  // Rebre totes les assignatures existents
  getSubjects() {
    this.subjectService.getSubjects().subscribe(res => {

      this.subjects = res as Subject[];
      this.mostrarLlistaAssignatures = true;
    });
  }

  objectQuery = {
    studentId: "",
    subjectName: ""
  }

  // Matricular un nou estudiant una assignatura
  addNewStudentOnSUbject(values) {
    this.objectQuery.studentId = values.studentid;
    this.objectQuery.subjectName = values.subjectname;
    this.subjectService.addNewStudentOnSUbject(this.objectQuery).subscribe(res => {
      console.log(res);
      values.subjectname = "";
      this.myForm2.reset();
    },
      err => {
        console.log(err);
      });
  }

  // Rebre tots els estudiants que cursen l'assginatura indicada
  getSubjectByName(values) {
    this.subjectService.getSubjectByName(values.subjectname).subscribe(res => {
      this.subject = res as Subject;
      console.log(this.subject);
      this.students = this.subject.students;
      //this.students = this.subject.students;
      console.log(this.students);
      this.mostrarAlumnesAssignatura = true;
      this.subjectName = values.subjectname;
      this.myForm3.reset();
    },
      err => {
        console.log(err);
      });
  }

  //private subjectService: SubjectService
  constructor(private subjectService: SubjectService, private studentService: StudentService) {

  }

  ngOnInit(): void {
  }

}
