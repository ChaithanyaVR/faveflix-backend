import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db";
import authRoutes from "./routes/authRoutes";
import favoriteRoutes from './routes/favoriteRoutes';
import movieSearchRoutes from './routes/movieSearch';

dotenv.config();

const app = express();


app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://faveflix-monorepo-bdy1h56tw-chaithanya-vrs-projects.vercel.app"
    ],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
  })
);



app.use(express.json());


connectDB();


app.use("/api/auth", authRoutes);
app.use("/api/favorites", favoriteRoutes);
app.use("/api/movies", movieSearchRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
