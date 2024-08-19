import express from "express";
import courseCtrl from "./controller/course.controller.js";
import validator from "./validators/course.validator.js";
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
    courseCtrl.create
  );
  router.get(
    '/',
    auth.authenticate,
    courseCtrl.getAll
  );
  router.get(
    '/:id',
    auth.authenticate,
    courseCtrl.detail
  );
  router.put(
    '/:id',
    auth.authenticate,
    validate(validator.update),
    courseCtrl.update
  );
  router.delete(
    '/:id',
    auth.authenticate,
    courseCtrl.deleteCourse
  );


  // Use the router in the app
  app.use('/api/courses', router);
};