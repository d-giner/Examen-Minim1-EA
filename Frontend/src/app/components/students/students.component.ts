import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { StudentService } from 'src/services/StudentService';
import { Student } from 'src/models/student';

@Component({
  selector: 'students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students: Student[];
  sutdentsByStudies: Student[];
  student = new Student;
  typeStudies: string;
  mostrar: boolean = false;
  mostrarByStudies: boolean = false;

  // Formulari per crear un nou alumne
  myForm1 = new FormGroup({
    name: new FormControl('', Validators.required),
    //id: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    phone1: new FormControl('', [Validators.minLength(9), Validators.maxLength(9)]),
    phone2: new FormControl('', [Validators.minLength(9), Validators.maxLength(9)]),
    studies: new FormControl('', Validators.required)
  });

  // Formulari per veure els alumnes de la titulació especificada
  myForm2 = new FormGroup({
    studiesname: new FormControl('', Validators.required)
  });


  // Post d'un nou estudiant
  postNewStudent(values) {
    this.student.setName(values.name);
    this.student.setAddress(values.address);
    this.student.clearPhoneList();
    this.student.setPhones(values.phone1, values.phone2);
    //this.student.setPhones("Work", values.phone2);
    this.student.setStudies(values.studies);
    this.studentService.postStudent(this.student).subscribe(res => {
      console.log(res);
      this.myForm1.reset();
    },
      err => {
        console.log(err);
      });
  }

  // Rebre estudiants de la menció introduida
  getStudentsByStudies(values) {
    this.typeStudies = values.studiesname;
    this.studentService.getStudentsByStudies(values.studiesname).subscribe(res => {
      this.sutdentsByStudies = res as Student[];
      this.mostrarByStudies = true;
      this.myForm2.reset();
    },
    err =>{
      console.log(err);
    });

  }


  // Rebre tots els estudiants que hi ha a la DB
  getStudents() {
    this.studentService.getStudents().subscribe(res => {
      this.students = res as Student[];
      this.mostrar = true;
    },
    err =>{
      console.log(err);
    });
  }


  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
  }

}
