import express ,{Request,Response}from 'express';
import validate from '../middleware/validate';
import { protect } from '../middleware/auth';
import {addBlogSchema,deleteSchema} from '../zod_schema/blog.Schema'
import {
  
    // getUserHandler,
    getAllBlogHandler,
    addBlogHandler,
    deleteBlogHandler

} from '../controller/blog.controller';



const router = express.Router();

router.post('/',protect,validate(addBlogSchema),addBlogHandler );
router.get('/',protect, getAllBlogHandler);
router.delete('/:id',protect,validate(deleteSchema),deleteBlogHandler);

export default router;

