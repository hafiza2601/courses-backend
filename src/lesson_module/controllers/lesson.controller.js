import Lesson from '../models/lesson.model.js';
import Course from '../../course_module/models/course.model.js';
import ErrorHandler from "../../shared/middlewares/errorHandler.js";

const create = async (req, res) => {
  try {
    const { title, content } = req.body;
    const { courseId } = req.params;

    const course = await Course.findById(courseId);
    if (!course) return res.status(404).json({ message: 'Course not found' });

    const lesson = new Lesson({
      title,
      content,
      courseId,
    });
    await lesson.save();
    res.status(201).json(lesson);
  } catch (error) {
    ErrorHandler(error, req, res);
  }
};

const getAll = async (req, res) => {
  try {
    const lessons = await Lesson.find({ courseId: req.params.courseId });
    res.json(lessons);
  } catch (error) {
    ErrorHandler(error, req, res);
  }
};

const update = async (req, res) => {
  try {
    const { title, content } = req.body;
    const { id } = req.params;

    const updatedLesson = await Lesson.findByIdAndUpdate(id, { title, content }, { new: true });
    if (!updatedLesson) return res.status(404).json({ message: 'Lesson not found' });

    res.json(updatedLesson);
  } catch (error) {
    ErrorHandler(error, req, res);
  }
};

const deleteLesson = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedLesson = await Lesson.findByIdAndDelete(id);
    if (!deletedLesson) return res.status(404).json({ message: 'Lesson not found' });

    res.json({ message: 'Lesson deleted' });
  } catch (error) {
    ErrorHandler(error, req, res);
  }
};

export default { create, getAll, update, deleteLesson };