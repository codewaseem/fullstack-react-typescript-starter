import mongoose from "./mongoose";
import * as passportLocalMongoose from "passport-local-mongoose";

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
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
  address: String,
  jobTitle: String,
  phoneNumber: String,
  personalInfo: String,
  fbLink: String,
  instagramLink: String,
  twitterLink: String,
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