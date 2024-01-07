const mongoose = requite("mongoose");
const { Schema } = mongoose;

const PlaceSchema = new Shema({
  title: String,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  address: String,
  photos: [String],
  description: String,
  perks: [String],
  extraInfo: String,
  checkIn: Number,
  checkOut: Number,
  maxGuests: Number,
});

const PlaceModel = mongoose.model("Place", PlaceSchema);

module.exports = PlaceModel;
