import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import songService from "../services/songs"
import Markdown from "react-markdown"
import MainHeader from "../components/MainHeader"
import NavBar from "../components/NavBar"

function SongPage() {
    const {id} = useParams()
    const [song, setSong] = useState("")
    const [maxId, setMaxId] = useState(0)

    useEffect(() => {
        async function getSong() {
            const res = await songService.getSongFile(id)
            setMaxId(parseInt(res.headers.max))
            setSong(res.data)
        }
        getSong()
    }, [])

    return(
        <div className="song">
            <MainHeader />
            <NavBar id={id} maxId={maxId}/>
            <div className="listItem">
                <h2>{id}. </h2>
                <Markdown>{song}</Markdown>
            </div> 
        </div>
    )
}

export default SongPage