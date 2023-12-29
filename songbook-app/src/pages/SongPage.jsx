import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import songService from "../services/songs"
import Markdown from "react-markdown"
import { useNavigate } from "react-router-dom"

function SongPage() {
    const {id} = useParams()
    const [song, setSong] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        async function getSong() {
            const res = await songService.getSongFile(id)
            setSong(res)
        }
        getSong()
    }, [])

    const handleHome = () => navigate("/")

    const handlePrev = () => {
        if(id >= 2) {
            console.log("going back")
            const newId = id - 1
            navigate(`/${newId}`)
            window.location.reload(false)
        }
    }

    const handleNext = () => {
        // TODO implement a way to know the max id
    }

    return(
        <div>
            {id} <br />
            <button onClick={handlePrev}>prev</button>
            <button onClick={handleHome}>home</button>
            <button onClick={handleNext}>next</button>
            <Markdown>{song}</Markdown>
        </div>
    )
}

export default SongPage