import app from "./app.js"
import { PORT } from "./config.js"

const message = `Server running on port ${PORT}`
app.listen(PORT, () => console.log(message))