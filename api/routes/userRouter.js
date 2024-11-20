import express from 'express'
import { getAllUser,UserSignup,userLogin } from '../controller/userController.js';


const router=express.Router();

router.get('/',getAllUser);
//ser
router.post('/signup',UserSignup);
router.post('/login',userLogin);

export default router