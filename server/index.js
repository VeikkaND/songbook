const express = require("express")
const cors = require("cors")
const app = express()
const router = require("./routes/routes")

const port = 3000

app.use(cors())

app.use("/api", router)

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})