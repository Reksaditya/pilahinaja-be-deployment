import app from "./app.ts"

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server is running, open docs at http://localhost:${PORT}/docs`)
})