import Artist from "./Artist.js";
import Booking from "./bookings.js";

Artist.hasMany(Booking, {
  foreignKey: "artistId",
  onDelete: "CASCADE"
});

Booking.belongsTo(Artist, {
  foreignKey: "artistId"
});

export { Artist, Booking };
