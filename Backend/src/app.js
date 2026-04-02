import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import authRoutes from "./routes/authRoutes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/auth",authRoutes);
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to LMS-OLP API' });
});

// Import routes
// import authRoutes from './routes/authRoutes.js';
// import courseRoutes from './routes/courseRoutes.js';
// import adminRoutes from './routes/adminRoutes.js';
// import paymentRoutes from './routes/paymentRoutes.js';

// app.use('/api/auth', authRoutes);
// app.use('/api/courses', courseRoutes);
// app.use('/api/admin', adminRoutes);
// app.use('/api/payments', paymentRoutes);

// Error handling middleware
app.use((err, req, res) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

export default app;
