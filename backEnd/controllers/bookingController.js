import Booking from "../models/bookings.js";
import QRCode from "qrcode";



export const createBooking = async (req, res) => {
  try {
    const { name, email , artistId} = req.body;
    console.log(artistId)
    if (!name || !email) {
      return res.status(400).json({ error: "Name and email are required" });
    }

    const bookingCode = "BR-" + Math.random().toString(36).substring(2, 8).toUpperCase();

    const qrCode = await QRCode.toDataURL(bookingCode);

   
    const booking = await Booking.create({
      code: bookingCode,
      name,
      email,
      qr: qrCode,
      artistId
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



export const getBookingByCode = async (req, res) => {
  try {
    const { code } = req.params;

    const booking = await Booking.findOne({ where: { email } });
    if (!booking) return res.status(404).json({ error: "Booking not found" });

    return res.json({ booking });
  } catch (err) {
    return res.status(500).json({ error: "Server error" });
  }
};



export const getBookingsByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const bookings = await Booking.findAll({ where: { email } });
    return res.json({ bookings });
  } catch (err) {
    return res.status(500).json({ error: "Server error" });
  }
};
