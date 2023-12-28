const express = require("express")
const app = express()
const routes = require("./routes/routes")

const port = 3000

app.get("/", routes)

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})