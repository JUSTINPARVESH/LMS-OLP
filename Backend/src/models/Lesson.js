import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: String,
  videoUrl: String,
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true
  }
}, { timestamps: true });

export default mongoose.model("Lesson", lessonSchema);