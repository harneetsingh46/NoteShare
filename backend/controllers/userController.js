import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { genToken } from "../utils/genToken.js";

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    if (!name || !email || !password) {
      res.status(400).json({
        message: "All fields are required",
      });
    }

    const userFound = await User.findOne({ email });
    if (userFound) {
      res.status(400).json({
        message: "Email already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    if (user) {
      res.status(200).json({
        message: "User created successfully",
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "User not found!",
      });
    }
    const isPassword = await bcrypt.compare(password, user.password);
    if (!isPassword) {
      return res.status(400).json({
        message: "Password is incorrect",
      });
    }

    const token = await genToken(user._id, user.name, user.email);
    console.log(token, "test");

    return res
      .status(200)
      .cookie("token", token, {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        maxAge: 24 * 60 * 60 * 1000,
      })
      .json({
        message: "User login Successfull",
        data: {
          name: user.name,
          email: user.email,
          authToken: token,
        },
      });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id).select("-password");
    if (!user) {
      return res.status(400).json({
        message: "Something went wrong while fetching user !",
      });
    }
    return res.status(200).json({
      message: "User",
      data: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

export const SignOut = async (req, res, next) => {
  try {
    return res.clearCookie("token").status(200).json({
      message: "Sign Out Successfull!",
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};
