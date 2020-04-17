import {Request, Response} from 'express';
import Subject from '../models/Subject';
import Student from '../models/Student';


class SubjectServices {

    // Obtener todas las asignaturas    
    public async getSubjects(req: Request, res: Response){
        await Subject.find().then((data) => {
            res.status(200).json(data);
        }).catch((error) => {
            res.status(500).json(error);
        });
    }

    //Obtener datos de los estudiantes que cursan una asignatura concreta
    public async getSubjectByName(req: Request, res: Response){
        await Subject.findOne({name: req.params.subject}).populate('students').then((data) => {
            console.log(data);
            res.status(200).json(data);
        }).catch((error) => {
            res.status(404).json("The subject dosen't exists.");
        });
    }

    // Añadir una nueva asignatura
    public async addSubject(req: Request, res: Response){
        console.log('Se ha recibido: ', req.body);
        let {name} = req.body;
        console.log(name);
        let existSubject = await Subject.findOne({name: name});
        if (existSubject){
            res.status(409).json('Error! The subject already exists.');
        }
        else {
            console.log(name);
            let newSubject = new Subject({name});
            await newSubject.save().then((data) => {
                res.status(201).json('New subject added correctly.');
            }).catch((err) => {
                res.status(500).json(err);
                });
        }        
    }

    //Añadir alumnos a una asignatura
    public async addStudentOnSubject(req: Request, res: Response){
        let {studentId, subjectName} = req.body;
        console.log(subjectName);

        let student = await Student.findById(studentId);
        console.log(student?._id);

        if (student){
            await Subject.updateOne({name: subjectName}, {$addToSet: {students: student?._id}}).then((data) => {
                if (data.nModified == 1){
                    res.status(201).json('Student added on subject correctly.');
                }
                else{
                    res.status(409).json('Error! Student already exists.');
                }
            }).catch((err) => {
                res.status(500).json(err);
                });;
        }
        else{
            res.status(404).json('Error! The student does not exists.')
        }
    }


    // Eliminar alumnos de una asignatura
    public async removeStudentFromSubject(req: Request, res: Response){
        let {studentId, subjectName} = req.body;
        let student = await Student.findOne(studentId);

        if (student){
            await Subject.updateOne({name: subjectName}, {$pull: {students: student._id}}).then((data) => {
                res.status(201).json(`Student removed correctly from ${subjectName}.`);
            }).catch((err) => {
                res.status(500).json(err);
                });;
        }
        else{
            res.status(404).json('Error! The student does not exists.')
        }
    }

}

export const subjectServices = new SubjectServices();