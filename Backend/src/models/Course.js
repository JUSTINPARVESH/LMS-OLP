import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  instructor: String,
  price: Number,
  lessons: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Lesson"
    }
  ]
}, { timestamps: true });

export default mongoose.model("Course", courseSchema);