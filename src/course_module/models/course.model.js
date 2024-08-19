import mongoose from 'mongoose';

const CourseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String
    }
}, { timestamps: true });

const Course = mongoose.model('Course', CourseSchema);

export default Course;