import { Query } from "..";

const all = () => Query('SELECT blogs.*, authors.name FROM blogs JOIN authors ON authors.id = blogs.authorid');

const one = (id: number) => Query('SELECT blogs.*, authors.name FROM blogs JOIN authors ON authors.id = blogs.authorid WHERE blogs.id = ?', [id]);

const insert = (newBlog: { title: string, content: string, authorid: number }) => 
    Query('INSERT INTO blogs SET ?', newBlog);

const update = (editedBlog: { title?: string, content?: string }, id: number ) =>
    Query('UPDATE blogs SET ? WHERE id = ?', [editedBlog, id]);

const destroy = (id: number) => Query('DELETE FROM blogs WHERE id = ?', [id]);

export default {
    all,
    one,
    insert,
    update,
    destroy
}