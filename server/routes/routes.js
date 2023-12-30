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

let songs = []

router.get("/", (req, res) => {
    try {
        const dir = path.resolve(__dirname, "../songs")
        const files = fs.readdirSync(dir)
        const max = files.length

        if(songs.length > 0) songs = []

        let i = 0
        files.forEach(async (file) => {
            const line = await readFirstLine(path.resolve(__dirname, `../songs/${file}`))
            i++
            const songObject = {
                title: line,
                id: parseInt(file.slice(0, 2)),
                path: path.resolve(__dirname, `../songs/${file}`)
            }
            songs.push(songObject)
            if(i >= max) {
                songs.sort((a, b) => {
                    if(a.id < b.id) {
                        return -1
                    } else if (a.id > b.id) {
                        return 1
                    }
                    return 0
                })
                res.send(songs).status(200)
            }
        })
    } catch (err) {
        console.error(err)
    }
})

router.get("/:id", (req, res) => {
    try {
        const song = songs.find((s) => s.id == req.params.id)
        res.sendFile(song.path, {headers: {
            "max": songs.length
        }})
    } catch (err) {
        console.log(err)
    }
})

module.exports = router