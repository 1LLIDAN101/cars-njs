import mongoose from 'mongoose';

const CarSchema = new mongoose.Schema({
    mark: {
        type: String, 
        required: false, 
        trim: true 
    },
    model: {
        type: String, 
        required: false,
        trim: true 
    },
    year: {
        type: Number, 
        required: false

    },
    color: {
        type: String, 
        required: false,
        trim: true 
    }
});

export default mongoose.model('Car', CarSchema);
