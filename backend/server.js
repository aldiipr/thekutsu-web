
const express = require("express");
require("dotenv").config();
const cors = require("cors");
const productRoutes = require("./routes/products");
const reviewRoutes = require("./routes/reviews")


const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());


app.use( productRoutes);
app.use("/api/reviews", reviewRoutes)


app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});