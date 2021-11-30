const mongoose = require("mongoose");
const user_schema = mongoose.Schema({
  document_type: { type: String, required: true },
  identification_document: { type: Number, required: true },
  names: { type: String, required: true },
  surnames: { type: String, required: true },
  direction: { type: String, required: true },
  email: { type: String, required: true },
  landline: { type: Number, required: true },
  cell_phone: { type: Number, required: true },
  link_to_website: { type: String, required: true },
  profile_description: { type: String, required: true },
});
module.exports = mongoose.model("user", user_schema);
