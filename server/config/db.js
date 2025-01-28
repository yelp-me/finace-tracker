import mongoose from 'mongoose';

const connectDB = async () => {
  const mongoURI = 'mongodb://localhost:27017/Finance_Tracker';
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("MongoDB connected");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1);
  }
};

export default connectDB;
