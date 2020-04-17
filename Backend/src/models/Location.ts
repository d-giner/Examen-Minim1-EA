import mongoose, {Schema, model} from 'mongoose';

const LocationSchema: Schema = new Schema({
    name: {type: String, required: true},
    state: {type: Number, required: true, enum: [1, 0]}, // 1 = Active, 0 = Unactive
    population: {type: Number},
    latitude: {type: String, required: true},
    longitude: {type: String, required: true}
});

export default model('Location', LocationSchema);