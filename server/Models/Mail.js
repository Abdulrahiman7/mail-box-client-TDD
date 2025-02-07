import { model, Schema } from "mongoose";

const mailSchema=new Schema({
    mail:{
        type:Object,
        required:true
    },to:{
        type:String,
        required:true
    },from:{
        type:String,
        required:true
    },Date:{
        type:Date,
        default:Date.now
    }
});
const Mail=model('Mail', mailSchema);

export default Mail;