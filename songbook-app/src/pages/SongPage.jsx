import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import songService from "../services/songs"

function SongPage() {
    const {id} = useParams()
    const [song, setSong] = useState("")

    useEffect(() => {
        async function getSong() {
            const res = await songService.getSongFile(id)
            setSong(res)
        }
        getSong()
    }, [])

    return(
        <div>
            {id}
        </div>
    )
}

export default SongPage