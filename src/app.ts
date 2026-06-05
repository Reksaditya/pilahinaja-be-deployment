import express from "express";

import userRoutes from "./routes/user.route";
import titleRoutes from "./routes/title.route";
import categoryRoutes from "./routes/category.route";
import trashRoutes from "./routes/trash.route";
import geminiRoutes from "./routes/gemini.route";
import guideRoutes from "./routes/guide.route";
import historyRoutes from "./routes/history.route";
import authRoutes from "./routes/auth.route";
import achievementRoutes from "./routes/achievement.route";
import postRoutes from "./routes/post.route";
import dashboardRoutes from "./routes/dashboard.route";
import leaderboardRoute from "./routes/leaderboard.route";

import { swaggerSpec, swaggerUi } from "./configs/swagger";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "Backend API is running"
  });
});
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