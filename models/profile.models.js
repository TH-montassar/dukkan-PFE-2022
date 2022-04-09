const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema(
  {
    birthday: { type: Date },
    avatar: { type: String },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Profile", ProfileSchema);
