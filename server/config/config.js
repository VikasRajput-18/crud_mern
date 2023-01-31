import mongoose from "mongoose";

const connection = async () => {
  const mongo_uri = process.env.MONGO_URL;
  try {
    mongoose.set({ strictQuery: true });
    await mongoose.connect(mongo_uri, () => {
      console.log("Database connection established");
    });
  } catch (error) {
    console.log(error);
  }
};
export default connection;
