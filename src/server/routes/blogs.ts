import { Router } from "express";
import db from "../db";

const router = Router();

// GET /api/blogs/
router.get('/:blogid?', async (req, res) => {
    const blogid = Number(req.params.blogid);

    try {
        if (blogid) {
            const [blog] = await db.blogs.one(blogid);
        res.json(blog);
        } else {
            const blogs = await db.blogs.all();
        res.json(blogs);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Code is messed up.', error});
    }
});

// POST /api/blogs/
// Request Body { title: string, content: string, authorid: number }
router.post('/', async (req, res) => {
    const newBlog = req.body;
    newBlog.authorid = 1;

    try {
        const result = await db.blogs.insert(newBlog);
        res.json({ msg: 'Blog created.', id: result.insertId });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Code is messed up.', error});
    }
});

// PUT /api/blogs/id
// Request Body { title?: string, content?: string }
router.put('/:blogid', async (req, res) => {
    const blogid = Number(req.params.blogid);
    const editedBlog = req.body;

    try {
        const result = await db.blogs.update(editedBlog, blogid);
        res.json({ msg: `Blog ${blogid} edited.`, affectedRows: result.affectedRows });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Code is messed up.', error});
    }
});

// DELETE /api/blogs/id
// Request Body { title?: string, content?: string }
router.delete('/:blogid', async (req, res) => {
    const blogid = Number(req.params.blogid);


    try {
        const result = await db.blogs.destroy(blogid);
        res.json({ msg: `Blog ${blogid} destroyed.`, affectedRows: result.affectedRows });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Code is messed up.', error});
    }
});

export default router;