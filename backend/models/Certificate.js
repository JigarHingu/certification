const mongoose = require("mongoose");

const CertificateSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true }, // Certificate type/certificate
});


module.exports = mongoose.model("Certificate", CertificateSchema);
