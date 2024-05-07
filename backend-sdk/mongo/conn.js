import mongoose from "mongoose";

const connectionString =
"mongodb+srv://21br13989:aqXlw557juiKAgDP@cluster0.gbdz2xp.mongodb.net/";

export const connect = (callBack) => {
  mongoose.set('strictQuery', false);
  mongoose
    .connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.log(err);
      return callBack(err);
    });
};