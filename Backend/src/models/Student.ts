import mongoose, {Schema, model} from 'mongoose';

const StudentSchema: Schema = new Schema({
    name: {type: String, required: true},
    address: {type: String, required: true},
    phones: [{
        home: {type: String}, 
        work: {type: String}
    }],
    studies: {type: String, required: true, enum: ['Telemàtica', 'Sistemes', 'Aeros']},
});

export default model('Student', StudentSchema);