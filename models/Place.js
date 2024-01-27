const mongoose = require("mongoose");
const { Schema } = mongoose;

const PlaceSchema = new Schema({
  title: String,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  address: String,
  photos: [String],
  description: String,
  perks: [String],
  extraInfo: String,
  checkIn: { type: Number, default: 12 },
  checkOut: { type: Number, default: 11 },
  maxGuests: Number,
  price: Number,
});

const PlaceModel = mongoose.model("Place", PlaceSchema);

module.exports = PlaceModel;
