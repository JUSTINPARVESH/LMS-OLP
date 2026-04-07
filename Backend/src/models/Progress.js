import mongoose from "mongoose";

const progressSchema = new mongoose.Schema({
  userId: String,
  courseId: String,
  completedLessons: [String],
  percent: Number
}, { timestamps: true });

export default mongoose.model("Progress", progressSchema);