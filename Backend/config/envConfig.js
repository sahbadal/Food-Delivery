import dotenv from "dotenv";

dotenv.config();

export const {
  PORT,
  MONGO_URI,
  JWT_SECRET,
  STRIPE_SECRET_KEY,
  IMAGEKIT_PUBLIC_KEY,
  IMAGEKIT_PRIVATE_KEY,
  IMAGEKIT_URL_ENDPOINT,
} = process.env;
