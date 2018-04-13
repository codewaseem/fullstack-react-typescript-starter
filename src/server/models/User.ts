import mongoose from "./mongoose";
import * as passportLocalMongoose from "passport-local-mongoose";
import { buildDbSchemaFromConfig } from "./utils";
import { UserFields } from "../../schemaConfigs/userSchema";

const schema = buildDbSchemaFromConfig(UserFields);

const UserSchema = new mongoose.Schema({
  ...schema,
  roleLevel: {
    type: Number,
    default: 0
  },
  password: {
    ...schema.password,
    select: false
  }
});

UserSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", UserSchema);

export default User;