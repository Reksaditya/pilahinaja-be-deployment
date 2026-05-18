import express from "express"

import userRoutes from "./routes/user.route"
import titleRoutes from "./routes/title.route"

const app = express()
app.use(express.json())

app.use("/user", userRoutes)
app.use("/title", titleRoutes)

export default app