import express from "express"

import userRoutes from "./routes/user.route"
import titleRoutes from "./routes/title.route"
import categoryRoutes from "./routes/category.route"
import trashRoutes from "./routes/trash.route"
import geminiRoutes from "./routes/gemini.route"
import guideRoutes from "./routes/guide.route"
import historyRoutes from "./routes/history.route"
import authRoutes from "./routes/auth.route"
import achievementRoutes from "./routes/achievement.route"

const app = express()
app.use(express.json())

app.use("/user", userRoutes) 
app.use("/login", authRoutes)
app.use("/title", titleRoutes)
app.use("/category", categoryRoutes)
app.use("/trash", trashRoutes)
app.use("/api", geminiRoutes)
app.use("/guide", guideRoutes)
app.use("/history", historyRoutes)
app.use("/achievement", achievementRoutes)

export default app