import mongoose, { Schema } from "mongoose";

const colorSchema = new Schema({
  nombreColor: {
    type: String,
    required: true,
    unique: true,
    minLength: 2,
    maxLength: 40,
  },
});

const Color = mongoose.model("Color", colorSchema);

export default Color;
