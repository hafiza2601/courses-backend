import Course from '../models/course.model.js';
import Lesson from "../../lesson_module/models/lesson.model.js";
import ErrorHandler from "../../shared/middlewares/errorHandler.js";

const create = async (req, res) => {
    try {
        const { title, description } = req.body;
        const course = new Course({
            title,
            description,
        });
        await course.save();
        res.status(201).json(course);
    } catch (error) {
        ErrorHandler(error, req, res);
    }
};

const getAll = async (req, res) => {
    try {
        const courses = await Course.find();
        res.json(courses);
    } catch (error) {
        ErrorHandler(error, req, res);
    }
};

const update = async (req, res) => {
    try {
        const { title, description } = req.body;
        const { id } = req.params;

        const updatedCourse = await Course.findByIdAndUpdate(id, { title, description }, { new: true });
        if (!updatedCourse) return res.status(404).json({ message: 'Course not found' });

        res.json(updatedCourse);
    } catch (error) {
        ErrorHandler(error, req, res);
    }
};

const deleteCourse = async (req, res) => {
    try {
        const course = await Course.findByIdAndDelete(req.params.id);
        if (!course) return res.status(404).json({ message: 'Course not found' });
        res.json({ message: 'Course deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const detail = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        if (!course) return res.status(404).json({ message: 'Course not found' });
        const lessons = await Lesson.find({ courseId: course._id });
        res.json({
            course,
            lessons,
        });
    } catch (error) {
        ErrorHandler(error, req, res);
    }
};

export default { create, getAll, update, deleteCourse, detail };