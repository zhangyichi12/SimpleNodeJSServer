import express from 'express';
import Student from './model.js';

let router = express.Router();

// Get all students
router.get('/', (req, res) => {
    Student.find({}, (err, students) => {
        res.send(students)
    });
});

// Get one student
router.get('/studentId/:studentId', (req, res) => {
    Student.findOne({ studentId: req.params.studentId }, (err, student) => {
        if(!student) {
            res.send({error: 'Student is not in DB.'})
            console.log(`Student is not in DB.`)
        }
        else {
            res.send(student);
            console.log('find student ok');
        }
    });
});

// Add one student
router.post('/addstudent', (req, res) => {
    Student.create(req.body, (err) => {
        console.log(req.body)
        if(err) {
            res.send({error: 'save student error'});
            console.log(`save student error: ${err}`);
        }
        else {
            res.send('save student ok');
            console.log('save student ok');
        }
    });
});

export default router;