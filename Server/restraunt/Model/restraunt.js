const mongoose =require('mongoose');


const RestrauntCardSchema = new mongoose.Schema({
    restraunt_name:{type:String, required:true},
    restraunt_Image: { type: [string] , default:},
    restraunt_cuisine:{type: [String], required:true},
    restraunt_Address:{ type:String},
    restraunt_Offer:{ type:String},
    restraunt_Rating:{ type:String },
    restraunt_Distance:{ type:Number , default:4.5},
})


const RestrauntCardModel = mongoose.model('card', CardSchema);

module.exports = RestrauntCardModel;