import mongoose from 'mongoose';

const userSchema =new mongoose.Schema({
    username:{
        type:String,
        required: true,
        unique: true,
    },

    email:{
        type:String,
        required: true,
        unique: true,
    },

    address:{
        type:String,
       
    },

    mobile:{
        type:String,
        unique:true,

    },

    isAdmin:{
        type:Boolean,
        default:false,
    },

    password:{
        type:String,
        required: true,
        
    },

    verifytoken:{
        type:String,
    },

    avatar:{
        type:String,
        default:"https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=",

    },


},{timestamps: true});

const User =mongoose.model('User',userSchema);
export default User;