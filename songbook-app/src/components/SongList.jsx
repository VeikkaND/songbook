import { useEffect, useState } from "react"
import songsService from "../services/songs"
import SongShort from "./SongShort"

function SongList() {
    const [songs, setSongs] = useState([])
    const [matchingSongs, setMatchingSongs] = useState([])
    
    useEffect(() => {
        async function getSongTitles() {
          const res = await songsService.getTitles()
          setSongs(res)
          setMatchingSongs(res)
        }
        getSongTitles()
    }, [])

    const handleInput = (event) => {
        event.preventDefault()
        setMatchingSongs(songs.filter(
            (song) => song.title.includes(event.target.value)))
    }

    return(
        <div>
            <input onChange={handleInput}></input> <br />
            {songs.length > 0
            ? matchingSongs.map(song => <SongShort title={song.title} 
                id={song.id} key={song.id}/>)
            : "Loading songs..."
            }
        </div>
    )
}

export default SongList