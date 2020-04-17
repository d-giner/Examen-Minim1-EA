import { Student } from './student';
// import { Observable } from 'rxjs';

export class Subject {

    private name: string;
    public students: [];

    constructor() {

    }
    public setName(nm: string){
        this.name = nm;
    }

    public getStudents(): Student[]{
        return this.students;
    }

    public addStudent(std: []){
        this.students = std;
    }
}

// let subject = new Subject();