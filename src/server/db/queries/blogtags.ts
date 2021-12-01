import { Query } from "../";

/* spBlogTags(blog_id INT)
    SELECT tags.id, tags.name FROM blogtags 
	JOIN tags ON tags.id = blogtags.tagid
	WHERE blogid = blog_id;
*/
const retrieve = (blogid: number) => Query('CALL spBlogTags(?)', [blogid]);

export default {
    retrieve
}