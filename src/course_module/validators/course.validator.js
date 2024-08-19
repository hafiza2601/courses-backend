import { body } from 'express-validator';

// Define validation rules for create cousre
const create = [
    body('title')
        .isString()
        .withMessage('Title must be a string')
        .notEmpty()
        .withMessage('Title is required'),

    body('description')
        .optional()
        .isString()
        .withMessage('Description must be a string')
];

const update = [
    body('title')
        .optional()
        .isString()
        .withMessage('Title must be a string'),

    body('description')
        .optional()
        .isString()
        .withMessage('Description must be a string')
];

export default { create, update };
