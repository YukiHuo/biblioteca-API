const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/Biblioteca-JavaScript-main";

async function connectDB() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB conectado com sucesso");
  } catch (err) {
    console.error("Erro ao conectar no MongoDB:", err.message);
    process.exit(1);
  }
}

module.exports = connectDB;