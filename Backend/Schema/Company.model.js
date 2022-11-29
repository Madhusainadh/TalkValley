const { Schema, model } = require("mongoose");
const companySchema = new Schema(
  {
    name: { type: String, required: true },
    url:{type: String, required: true},
     },
  {
    versionKey: false,
  }
);
const companyModel = model("company", companySchema);
module.exports = companyModel;
