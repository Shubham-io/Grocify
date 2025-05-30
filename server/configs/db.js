import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // logging the connection details  
    mongoose.connection.on("connected", () =>
      console.log("Database Connected")
    );
    // connecting with database 
    await mongoose.connect(`${process.env.MONGODB_URI}/grocify`);
  } catch (error) {
    console.error(error.message);
  }
};

export default connectDB;
