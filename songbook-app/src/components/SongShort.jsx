import { useNavigate } from "react-router-dom"
import Markdown from "react-markdown"

function SongShort(song) {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/${song.id}`)
    }

    return(
        <div>
            <span onClick={handleClick}>
                {song.id} <Markdown>{song.title}</Markdown>
            </span>
        </div>
    )
}

export default SongShort