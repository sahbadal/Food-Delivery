import express from "express";
import { PORT } from "./config/envConfig.js";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import { handleStripeWebhook } from "./controllers/orderController.js";

const app = express();

const allowedOrigins = [
  "https://food-delivery-bice-eight.vercel.app",
  "https://food-delivery-admin-five-wheat.vercel.app",
];

app.use(
  "/webhook",
  express.raw({ type: "application/json" }),
  handleStripeWebhook
);

//middlewares
app.use(express.json());
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

// DB connection
connectDB();

//api endpoints
app.use("/api/food", foodRouter);
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("<h1>Welcome to the Food API</h1>");
});

app.listen(PORT, () => {
  console.log(`listening on port: http://localhost:${PORT}`);
});
