import mongoose from 'mongoose';
const { Schema, model } = mongoose;
//import {Schema, model} from "mongoose";
const questionTestSchema = new Schema(
    {
        
        contenu: {
            type: String,
            required: true,
         },
    
    
    }
)

export default model("QuestionTest", questionTestSchema);