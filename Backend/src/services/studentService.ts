import {Request, Response} from 'express';
import Student from '../models/Student';

class StudentServices{
    
    //Obtener todos los alumnos
    public async getStudents(req: Request, res: Response){
        await Student.find().then((data) => {
            res.status(200).json(data);
        }).catch((error) => {
            res.status(500).json(error);
        });
    }

    // Obtener alumnos por tipo de estudios
    public async getStudentByMention(req: Request, res: Response){
        await Student.find({studies: req.params.mention}).then((data) => {
            res.status(200).json(data);
            console.log(data);
        }).catch((error) => {
            res.status(500).json("You wrote wrong the kind of studies." + error);
        });
    }

    // Añadir un nuevo estudiante
    public async addStudent(req: Request, res: Response){
        let {name, address, phones, studies} = req.body;
        console.log('Se ha recibido: ', req.body);
        let newStudent = new Student({name, address, phones, studies});
        await newStudent.save().then((data) => {
            res.status(201).json('New student has been added correctly.');
        }).catch((err) => {
            res.status(500).json(err);
            });
    }
}

export const studentServices = new StudentServices();