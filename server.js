const express = require("express");
const swaggerUI = require("swagger-ui-express");
const swaggerDocument = require("./docs/swagger.json");

const connectDB = require("./config/config");
const bookRoutes = require("./routes/bookRoutes");

const app = express();

connectDB();
app.use(express.json());
app.use("/api", bookRoutes);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use(express.urlecoded({extended: true}));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Ocorreu um erro no servidor." });
});

app.listen(3000, () => console.log("Server running on port 3000"));