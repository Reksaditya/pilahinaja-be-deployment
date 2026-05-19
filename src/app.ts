import express from "express"

import userRoutes from "./routes/user.route"
import titleRoutes from "./routes/title.route"
import categoryRoutes from "./routes/category.route"
import trashRoutes from "./routes/trash.route"
import geminiRoutes from "./routes/gemini.route"

const app = express()
app.use(express.json())

app.use("/user", userRoutes)
app.use("/title", titleRoutes)
app.use("/category", categoryRoutes)
app.use("/trash", trashRoutes)
app.use("/api", geminiRoutes);

export default app