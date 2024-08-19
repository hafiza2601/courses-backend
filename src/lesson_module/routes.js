import express from "express";
import lessonCtrl from "../lesson_module/controllers/lesson.controller.js";
import validator from "../lesson_module/validators/lesson.validators.js";
import auth from "../shared/middlewares/auth.middleware.js";
import { validate } from "../shared/middlewares/validator.middleware.js";

export const addRoutes = (app) => {
  const router = express.Router({
    mergeParams: true
  });

  // Define routes
  router.post(
    '/',
    auth.authenticate,
    validate(validator.create),
    lessonCtrl.create
  );
  router.get(
    '/',
    auth.authenticate,
    lessonCtrl.getAll
  );
  router.put(
    '/:id',
    auth.authenticate,
    validate(validator.update),
    lessonCtrl.update
  );
  router.delete(
    '/:id',
    auth.authenticate,
    lessonCtrl.deleteLesson
  );


  // Use the router in the app
  app.use('/api/courses/:courseId/lessons', router);
};