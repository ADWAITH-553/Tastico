import mongoose, {Schema,model} from "mongoose";

const schema = new Schema({
  cname:String,
  caddress:String,
  ph:String,
  email:String,
  dish:String,
  password:String,

})

export default model("Cuser",schema);