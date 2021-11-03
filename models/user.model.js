import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema({
  username: { type: String, required: true},
  name: { type: String, required: true},
  password: { type: String, required: true },
});

userSchema.pre("save", function (next) {
  if (this.isModified("password")) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8), null);
  }
  next();
});

const User = mongoose.model("user", userSchema);

export default User;