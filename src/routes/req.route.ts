import express ,{Request,Response}from 'express';
import validate from '../middleware/validate';
import { protect } from '../middleware/auth';
// import {addBlogSchema,deleteSchema} from '../zod_schema/blog.Schema'
import {
  
    // getUserHandler,
    getAllRequestHandler,
    // addBlogHandler,
    // deleteBlogHandler
    addRequestHandler

} from '../controller/req.controller';



const router = express.Router();

router.post('/',protect,addRequestHandler );
router.get('/',protect, getAllRequestHandler);
// router.delete('/:id',protect,validate(deleteSchema),deleteBlogHandler);

export default router;

