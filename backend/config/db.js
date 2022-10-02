import mongoose from "mongoose";

//db connection
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_DB, {
      //TODO: I think the below is depreciated now - Need to look at this again
      // useUnifiedTopology: true,
      // useNewUrlParser: true,
      // useCreateIndex: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.effor(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
