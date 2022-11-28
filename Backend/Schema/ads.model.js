const { Schema, model } = require("mongoose");
const adsSchema = new Schema(
  {
    companyId: { type: Number, required: true },
    primaryText:{type: String, required: true},
    headline: { type: String, required: true },
    description: { type: String, required: false },
    CTA: { type: String, required: true },
    imageUrl: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);
const adsModel = model("ads", adsSchema);
module.exports = adsModel;
