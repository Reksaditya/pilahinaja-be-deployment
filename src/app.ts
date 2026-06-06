import express from "express";
import cors from "cors";

import userRoutes from "./routes/user.route.js";
import titleRoutes from "./routes/title.route.js";
import categoryRoutes from "./routes/category.route.js";
import trashRoutes from "./routes/trash.route.js";
import geminiRoutes from "./routes/gemini.route.js";
import guideRoutes from "./routes/guide.route.js";
import historyRoutes from "./routes/history.route.js";
import authRoutes from "./routes/auth.route.js";
import achievementRoutes from "./routes/achievement.route.js";
import postRoutes from "./routes/post.route.js";
import dashboardRoutes from "./routes/dashboard.route.js";
import leaderboardRoute from "./routes/leaderboard.route.js";
import uploadRoutes from "./routes/upload.route.js";

import { swaggerSpec, swaggerUi } from "./configs/swagger.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "Backend API is running"
  });
});

app.use(cors());

app.use("/upload", uploadRoutes);
app.use("/user", userRoutes); 
app.use("/auth", authRoutes);
app.use("/title", titleRoutes);
app.use("/category", categoryRoutes);
app.use("/trash", trashRoutes);
app.use("/ai", geminiRoutes);
app.use("/guide", guideRoutes);
app.use("/history", historyRoutes);
app.use("/achievement", achievementRoutes);
app.use("/post", postRoutes);
app.use("/dashboard", dashboardRoutes);
app.use("/leaderboard", leaderboardRoute);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default app;