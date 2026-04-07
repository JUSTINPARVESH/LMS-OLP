import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
  courseId: String,
  questions: Array,
  answers: Array
}, { timestamps: true });

export default mongoose.model("Quiz", quizSchema);