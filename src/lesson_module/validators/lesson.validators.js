import { body, param } from 'express-validator';

// Define validation rules for create cousre
const create = [
  param('courseId')
    .isMongoId()
    .withMessage('Invalid course ID'),

  body('title')
    .isString()
    .withMessage('Title must be a string')
    .notEmpty()
    .withMessage('Title is required'),

  body('content')
    .optional()
    .isString()
    .withMessage('Description must be a string')
];

export default { create };
