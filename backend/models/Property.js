const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema(
  {
    propertyName: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      required: true,
    },

    rent: {
      type: Number,
      required: true,
    },

    status: {
      type: String,
      default: "Available",
    },

    image: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Property",
  propertySchema
);