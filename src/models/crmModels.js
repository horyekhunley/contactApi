import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ContactSchema = new Schema({
    firstName:{
        type: String,
        require: "Enter a first name"
    },
    lastName:{
        type: String,
        require: "Enter a last name"
    },
    email:{
        type: String,
    },
    company:{
        type: String,
    },
    number:{
        type: Number,
    },
    createdDate:{
        type: Date,
        default: Date.now
    }
})