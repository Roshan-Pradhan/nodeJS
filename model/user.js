//import mongoose for database
import mongoose from "mongoose";

//destructuring mongoose.schema
//Scheme is just like a table of mysql
const { Schema } = mongoose;

//creating schema
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  {
    //it provides when user were registered
    timestamps: true,
  }
);

//exporting mongooose from model with Name Users
export default mongoose.model("Users", userSchema);

// const {name}=data;
// const {id}=name;
