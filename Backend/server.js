import express from "express";
import { PORT } from "./config/envConfig.js";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

const app = express();

//middlewares
app.use(express.json());
app.use(cors());

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
