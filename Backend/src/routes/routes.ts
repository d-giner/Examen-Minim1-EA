import { Router, Request } from 'express';
import { subjectServices } from '../services/subjectServices';
import { studentServices } from '../services/studentService';
import { locationServices } from '../services/LocationService';

const router: Router = Router();

// Routes for locations

router.post('/locations', locationServices.addNewLocation);

router.get('/locations', locationServices.getLocations);

router.put('/locations', locationServices.updateLocation);

// Routes for subjects

router.get('/subjects', subjectServices.getSubjects);

router.get('/subjects/:subject', subjectServices.getSubjectByName);

router.post('/subjects', subjectServices.addSubject);

router.put('/subjects/addStudents', subjectServices.addStudentOnSubject);

router.delete('/subjects/removeStudents', subjectServices.removeStudentFromSubject);


// Routes for students

router.get('/students', studentServices.getStudents);

router.get('/students/:mention', studentServices.getStudentByMention);

router.post('/students', studentServices.addStudent);

export default router;