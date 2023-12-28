const express = require("express")
const router = express.Router()
const fs = require("fs")
const path = require("path")
const readline = require("readline")

async function readFirstLine(path) {
    const inputStream = fs.createReadStream(path)
    try {
        for await (const line of readline.createInterface(inputStream)) {
            return line
        }
        return ""
    }
    finally {
        inputStream.destroy()
    }
}

router.get("/", (req, res) => {
    try {
        const dir = path.resolve(__dirname, "../songs")
        const files = fs.readdirSync(dir)
        const max = files.length

        let songs = []
        let i = 0
        files.forEach(async (file) => {
            //TODO fix wrong orders sometimes because of desync
            const line = await readFirstLine(path.resolve(__dirname, `../songs/${file}`))
            i++
            songs.push(line)
            if(i >= max) {
                res.send(songs).status(200)
            }
        })
    } catch (err) {
        console.error(err)
    }
})

router.get("/:id", (req, res) => {
    try {
        // TODO send song file
    } catch (err) {
        console.log(err)
    }
})

module.exports = router