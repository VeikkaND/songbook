import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import songService from "../services/songs"
import Markdown from "react-markdown"
import { useNavigate } from "react-router-dom"

function SongPage() {
    const {id} = useParams()
    const [song, setSong] = useState("")
    const [maxId, setMaxId] = useState(0)
    const navigate = useNavigate()

    useEffect(() => {
        async function getSong() {
            const res = await songService.getSongFile(id)
            setMaxId(parseInt(res.headers.max))
            setSong(res.data)
        }
        getSong()
    }, [])

    const handleHome = () => navigate("/")

    const handlePrev = () => {
        if(id >= 2) {
            const newId = parseInt(id) - 1
            navigate(`/${newId}`)
            window.location.reload(false)
        }
    }

    const handleNext = () => {
        if(id < maxId) {
            const newId = parseInt(id) + 1
            navigate(`/${newId}`)
            window.location.reload(false)
        }
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