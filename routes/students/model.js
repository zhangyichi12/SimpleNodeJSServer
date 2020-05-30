import mongoose from 'mongoose';
import studentSchema from './schema.js';

export default mongoose.model('Studet', studentSchema);