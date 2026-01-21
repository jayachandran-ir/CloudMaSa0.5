import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();

/* ===============================
   MIDDLEWARE
================================ */
app.use(cors());
app.use(express.json());

/* ===============================
   CONNECT TO MONGODB
================================ */
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

/* ===============================
   BOOKING SCHEMA
================================ */
const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  company: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  date: { type: String, required: true }, // YYYY-MM-DD
  time: { type: String, required: true },
}, { timestamps: true });

// Enforce unique booking per email per date
bookingSchema.index({ email: 1, date: 1 }, { unique: true });

const Booking = mongoose.model("Booking", bookingSchema);

/* ===============================
   FREE CONSULTATION API
================================ */
app.post("/api/free-consultation", async (req, res) => {
  const { name, company, email, phone, date, time } = req.body;

  // Validation
  if (!name || !company || !email || !phone || !date || !time) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Check if user already booked today
    const existing = await Booking.findOne({ email, date });
    if (existing) {
      return res.status(400).json({ message: "You have already submitted today" });
    }

    // Save new booking
    const newBooking = new Booking({ name, company, email, phone, date, time });
    await newBooking.save(); 

    // Setup Nodemailer transporter
    const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: true, // REQUIRED for SSL 465
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
    });

    // Optional – test SMTP
    transporter.verify((error, success) => {
    if (error) {
        console.error("❌ SMTP ERROR:", error);
    } else {
        console.log("✅ SMTP authentication successful");
    }
    });



    // Email to Admin
    const adminMail = {
      from: `"CloudMaSa Free Consultation" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "📅 New Free Consultation Request",
      html: `
        <h2>New Free Consultation Request</h2>
        <hr/>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time Slot:</strong> ${time}</p>
      `,
    };

    // Confirmation Email to User
    const userMail = {
      from: `"CloudMaSa Team" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "✅ Your Free Consultation is Confirmed!",
      html: `
        <h2>Hi ${name},</h2>
        <p>Thank you for booking a free cloud consultation with CloudMaSa.</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p>We look forward to speaking with you!</p>
        <br/>
        <p>— CloudMaSa Team</p>
      `,
    };

    // Send emails
    await transporter.sendMail(adminMail);
    await transporter.sendMail(userMail);

    console.log(`✅ Booking saved & emails sent: ${email} on ${date}`);
    return res.status(200).json({ message: "Consultation request sent successfully" });

  } catch (error) {
    console.error("Error:", error);

    // Handle duplicate key error
    if (error.code === 11000) {
      return res.status(400).json({ message: "You have already submitted today" });
    }

    return res.status(500).json({ message: "Failed to process consultation request" });
  }
});

/* ===============================
   SERVER START
================================ */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});
