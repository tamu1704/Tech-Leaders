const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectSchema = new Schema({
    user_id: {type:Schema.Types.ObjectId},
    imageUrl:{type:String,required:true},
    projectTitle:{type:String,required:true},
    description:{type:String,requires:true},
    tech_stack:{type:[String],requires:true},
    workExperience:{type:String,requires:true},
    projectContributor:{type:[String],required:true},
    experienceLevel:{type:Number,enum:["Entry level","Intermediate","Expert"]},
    itActive:{type:Boolean,requires:true,default:true}
},
{timestamps:true});

module.exports=mongoose.model('User', projectSchema);

