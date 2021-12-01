import { Router } from "express";
import blogsRouter from './blogs';
import blogtagsRouter from './blogtags';

const router = Router();

router.use('/blogs', blogsRouter);
router.use('/blogtags', blogtagsRouter);

export default router;