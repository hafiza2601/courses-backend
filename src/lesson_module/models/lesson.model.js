import mongoose from 'mongoose';

const LessonSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
}, { timestamps: true });

const Lesson = mongoose.model('Lesson', LessonSchema);
export default Lesson;