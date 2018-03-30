import mongoose from "./mongoose";
import * as passportLocalMongoose from "passport-local-mongoose";

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  dob: {
    type: Date
  },
  password: {
    type: String,
    select: false
  },
  roleLevel: {
    type: Number,
    default: 0
  }
});

UserSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", UserSchema);

export default User;