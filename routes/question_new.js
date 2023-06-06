import express from 'express';
import { getAllQuestion1,AjoutQuestion1} from '../controllers/question_new.js';

const router = express.Router();


router.get("/", getAllQuestion1);
router.post("/AjoutQuestion",AjoutQuestion1);
    

export default router;