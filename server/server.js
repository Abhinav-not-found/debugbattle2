const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db");
const { errorHandler } = require("./middleware/errorMiddleware");

dotenv.config({ quiet: true });
connectDB();

const app = express();
app.use((req, res, next) => {
	console.log(req.method, req.originalUrl);
	next();
});
const port = process.env.PORT || 5000;

app.use(
	cors({
		origin: true,
		credentials: true,
	}),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));
app.use("/api/inventory", require("./routes/inventoryRoutes"));

app.get("/", (req, res) => {
	res.send("Server is running");
});

app.use(errorHandler);

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});
