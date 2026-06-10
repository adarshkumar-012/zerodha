const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserModel = require("../models/UsersModel");

/* =========================
   SIGNUP
========================= */

const signup = async (req, res) => {

  try {

    const { username, email, password } = req.body;

    if (!username || !email || !password) {

      return res.status(400).json({
        message: "All fields are required",
      });

    }

    if (password.length < 6) {

      return res.status(400).json({
        message: "Password must be at least 6 characters",
      });

    }

    const existingUser = await UserModel.findOne({ email });

    if (existingUser) {

      return res.status(400).json({
        message: "User already exists",
      });

    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({
      message: "Signup successful",
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      message: "Server error",
    });

  }

};

/* =========================
   LOGIN
========================= */

const login = async (req, res) => {

  try {

    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });

    if (!user) {

      return res.status(400).json({
        message: "Invalid email",
      });

    }

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {

      return res.status(400).json({
        message: "Invalid password",
      });

    }

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    res.status(200).json({
      message: "Login successful",
      token,

      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      message: "Server error",
    });

  }

};

module.exports = {
  signup,
  login,
};