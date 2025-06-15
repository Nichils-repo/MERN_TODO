import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      //db names goes before the ? in the connection string
      process.env.MONGO_URI
    );
    console.log("mongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to mongoDB ", error);
    process.exit(1); //status code 1 = exit with failure; 0 = exit with success
  }
};
