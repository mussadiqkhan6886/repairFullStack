import dotenv from "dotenv";
import connectDB from "./config/dbConnection";
import bcrypt from "bcryptjs"
import User from "./models/UserModel";

dotenv.config();

const createUsers = async () => {
  try {
    await connectDB();

    const users = [
      {
        username: "mk123",
        email: "mk123@gmail.com",
        password: await bcrypt.hash("mk1234", 10),
        role: "Employee",
        status: "Active",
      },
      {
        username: "immk123",
        email: "immk123@gmail.com",
        password: await bcrypt.hash("immk1234", 10),
        role: "Manager",
        status: "Active",
      },
      {
        username: "mussadiq",
        email: "mussadiq@gmail.com",
        password: await bcrypt.hash("mussadiq6886", 10),
        role: "Admin",
        status: "Active",
      },
    ];

    await User.deleteMany();

    await User.insertMany(users);

    console.log("Test users created successfully");

    process.exit(0);

  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

createUsers();