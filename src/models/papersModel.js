const { Schema, model } = require("mongoose");

const paperSchema = new Schema({
  paper: { type: String },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["valid", "not valid"],
  },

  uploadDate: {
    type: Date,
    default: Date.now(),
  },
  lastModified: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: Boolean,
    required: true,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Paper = model("Paper", paperSchema);
module.exports = Paper;
