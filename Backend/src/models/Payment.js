import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  userId: String,
  courseId: String,
  amount: Number,
  status: String,
  razorpayId: String
}, { timestamps: true });

export default mongoose.model("Payment", paymentSchema);