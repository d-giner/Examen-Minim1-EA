import mongoose, {Schema, model} from 'mongoose';


const SubjectSchema: Schema = new Schema({
    name: {type: String, required: true, unique: true},
    students: [{type: Schema.Types.ObjectId, ref: 'Student', unique: true}]
});

export default model('Subject', SubjectSchema);