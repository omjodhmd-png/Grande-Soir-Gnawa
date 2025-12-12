// controllers/bookingController.js
import Booking from "../models/booking.js";
import QRCode from "qrcode";

// Create new booking
export const createBooking = async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: "Name and email are required" });
    }

    // Generate BR code
    const bookingCode = "BR-" + Math.random().toString(36).substring(2, 8).toUpperCase();

    // Generate QR code Base64
    const qrCode = await QRCode.toDataURL(bookingCode);

    // Save booking
    const booking = await Booking.create({
      code: bookingCode,
      name,
      email,
      qr: qrCode
    });

    return res.status(201).json({
      success: true,
      booking
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
};

// Get booking by code

export const getBookingByCode = async (req, res) => {
  try {
    const { code } = req.params;

    const booking = await Booking.findOne({ where: { code } });
    if (!booking) return res.status(404).json({ error: "Booking not found" });

    return res.json({ booking });
  } catch (err) {
    return res.status(500).json({ error: "Server error" });
  }
};

// Get bookings by email

export const getBookingsByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const bookings = await Booking.findAll({ where: { email } });
    return res.json({ bookings });
  } catch (err) {
    return res.status(500).json({ error: "Server error" });
  }
};
