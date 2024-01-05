import { useNavigate } from "react-router-dom"
import Markdown from "react-markdown"

function SongShort(song) {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/${song.id}`)
    }

    return(
        <div className="listItem" onClick={handleClick}>
            <h2>{song.id}. </h2>
            <Markdown>{song.title}</Markdown>
        </div>
    )
}

export default SongShort