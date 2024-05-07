import mongoose, {Schema,model} from "mongoose";
const dishavailschema=new Schema({
  name:String,
  price:Number
})
const schema = new Schema({
  cname:String,
  caddress:String,
  ph:String,
  email:String,
  dish:String,
  password:String,
  count:Number,
  dishavail:[
    dishavailschema
  ]
})
export default model("Caterer",schema)