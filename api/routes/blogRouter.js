import express from 'express';
import { getAllBlogs,addBlogs,updateBlog,getBlogId,deleteBlog } from '../controller/blogController.js';

const router=express.Router();

router.get('/',getAllBlogs);
router.post('/add',addBlogs);
router.put('/update/:id',updateBlog);
router.get('/:id',getBlogId)
router.delete('/:id',deleteBlog)

export default router;