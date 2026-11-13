const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to the configured database. Set MONGODB_URI in the environment.
const mongoUri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/lynk";

// 2) USER MODEL
const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true }
});
const User = mongoose.model("User", userSchema);

// 3) SIGNUP (POST /signup)
app.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    const exists = await User.findOne({ email });
    if (exists) {
      return res.status(409).json({ message: "Email already registered" });
    }

    const hash = await bcrypt.hash(password, 10);
    const newUser = await User.create({ name, email, password: hash });

    // ✅ return user directly
    return res.status(201).json({
      user: { id: newUser._id, name: newUser.name, email: newUser.email }
    });
  } catch (e) {
    return res.status(500).json({ message: "Server error" });
  }
});

// 4) LOGIN (POST /login)
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // ✅ return user directly
    return res.json({
      user: { id: user._id, name: user.name, email: user.email }
    });
  } catch (e) {
    return res.status(500).json({ message: "Server error" });
  }
});

// 5) START SERVER
const PORT = process.env.PORT || 5000;

mongoose
  .connect(mongoUri)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1);
  });
