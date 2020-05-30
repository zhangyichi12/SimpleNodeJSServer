import mongoose, { Schema } from 'mongoose';

let studentSchema = new Schema({
    studentId:  { type: String, index: true, unique: true },
    name:       { type: String, default: "" }
});

export default studentSchema;