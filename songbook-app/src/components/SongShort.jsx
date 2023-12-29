import { useNavigate } from "react-router-dom"

function SongShort(song) {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/${song.id}`)
    }

    return(
        <div>
            <span onClick={handleClick}>
                {song.id} {song.title}
            </span>
        </div>
    )
}

export default SongShort