import mongoose, { Schema,model } from "mongoose"

const schema = new Schema({
  firstname:{
    type: String,
    required: true,
  },
  lastname:{
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  username: {
    type: String,
  }
});

export default model("User", schema);