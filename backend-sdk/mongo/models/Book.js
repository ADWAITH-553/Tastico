import mongoose, {Schema,model} from "mongoose";
const bookschema =new Schema({
    name:String,
    attendees:Number,
    price:Number
})
const schema = new Schema({
  cname:String,
  uname:String,
  event:String,
  cid:String,
  uid:String,
  grandTotal:Number,
  date:String,
  response:Boolean,
  rejected:Boolean,
  booked:[bookschema]

})

export default model("Book",schema);