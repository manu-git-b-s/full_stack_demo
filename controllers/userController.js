import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../utils.js/config.js";

const userController = {
  signup: async (request, response) => {
    try {
      const { username, name, password } = request.body;

      const user = await User.findOne({ username });

      if (user) {
        return response.status(400).json({ message: "Message Already exists" });
      }

      const hashedPwd = await bcrypt.hash(password, 10);

      const newUser = new User({ username, name, passwordHash: hashedPwd });

      await newUser.save();

      response
        .status(200)
        .json({ message: "User Created Successfully", data: newUser });
    } catch (error) {
      response.status(500).json({ message: error.message });
    }
  },

  signin: async (request, response) => {
    try {
      const { username, password } = request.body;
      const user = await User.findOne({ username });
      if (!user) {
        return response.status(400).json({ message: "User not found" });
      }

      const passwordCorrect = bcrypt.compare(password, user.passwordHash);

      if (!passwordCorrect) {
        return response.status(400).json({ message: "Invalid password" });
      }

      const token = jwt.sign(
        {
          username: user.username,
          id: user._id,
          name: user.name,
        },
        JWT_SECRET
      );

      response.status(200).json({ message: "User logged in", token });
    } catch (error) {
      response.status(500).json({ message: error.message });
    }
  },

  getUser: async (request, response) => {},
};

export default userController;
