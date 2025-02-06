import { model, Schema } from "mongoose";

const mailSchema=new Schema({
    mail:{
        type:String,
        required:true
    },to:{
        type: Schema.Types.ObjectId,  
    ref: 'User',  
    required: true
    },from:{
        type: Schema.Types.ObjectId,  
    ref: 'User',  
    required: true
    },Date:{
        type:Date,
        default:Date.now
    }
});
const Mail=model('Mail', mailSchema);

export default Mail;