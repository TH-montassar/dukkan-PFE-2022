const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    number: { type: Number },
    email: {
      type: String,
      unique: true,
      index: true,
      lowercase: true,
      required: true,
    },
    password: { type: String },
    profile: { type: mongoose.Schema.Types.ObjectId, ref: "Profile" },
    role: {
      type: String,
      enum: ["customer", "merchant"],
      default: "customer",
    },
    isAdmin: { type: Boolean, default: false },
    address: { type: mongoose.Schema.Types.ObjectId, ref: "Address" },
    googleId: { type: String },
    store: { type: mongoose.Schema.Types.ObjectId, ref: "Store" },
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", UserSchema);
