import { Router } from "express";
import db from "../db";

const router = Router();

// GET /api/blogtags/1
router.get('/:blogid', async (req, res) => {
    const blogid = Number(req.params.blogid);

    try {
        const [blogtags] = await db.blogtags.retrieve(blogid);
        res.json(blogtags);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Code is messed up.', error});
    }
});

export default router;