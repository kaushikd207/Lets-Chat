const mongoose=require('mongoose')

const messageModel=mongoose.Schema({
    sender:{type: mogoose.Schema.Types.ObjectId, ref:"user"},
    content:{type:String, trim:true},
    chat: { type: mogoose.Schema.Types.ObjectId, ref: "Chat" },
},{
    timeStamps:true,
});
const message = mongoose.model("Message", messageModel);

module.exports=Message;