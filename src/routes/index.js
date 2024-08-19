import { addRoutes as authRoutes } from "../auth_module/routes.js";
import { addRoutes as courseRoutes } from "../course_module/routes.js";
import { addRoutes as lessonRoutes } from "../lesson_module/routes.js";

export default [
    authRoutes,
    courseRoutes,
    lessonRoutes
]